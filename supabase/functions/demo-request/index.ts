Deno.serve(async (req) => {
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE, PATCH',
        'Access-Control-Max-Age': '86400',
        'Access-Control-Allow-Credentials': 'false'
    };

    if (req.method === 'OPTIONS') {
        return new Response(null, { status: 200, headers: corsHeaders });
    }

    try {
        const { aiEmployeeId, company, useCase, scheduledDate, contactInfo } = await req.json();

        if (!aiEmployeeId) {
            throw new Error('AI employee ID is required');
        }

        // Get environment variables
        const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
        const supabaseUrl = Deno.env.get('SUPABASE_URL');

        if (!serviceRoleKey || !supabaseUrl) {
            throw new Error('Supabase configuration missing');
        }

        console.log('Processing demo request for AI employee:', aiEmployeeId);

        // Get user from auth header
        let userId = null;
        const authHeader = req.headers.get('authorization');
        if (authHeader) {
            try {
                const token = authHeader.replace('Bearer ', '');
                const userResponse = await fetch(`${supabaseUrl}/auth/v1/user`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'apikey': serviceRoleKey
                    }
                });
                if (userResponse.ok) {
                    const userData = await userResponse.json();
                    userId = userData.id;
                    console.log('User identified:', userId);
                }
            } catch (error) {
                console.log('Could not get user from token:', error.message);
            }
        }

        // Verify AI employee exists
        const aiEmployeeResponse = await fetch(`${supabaseUrl}/rest/v1/ai_employees?id=eq.${aiEmployeeId}`, {
            headers: {
                'Authorization': `Bearer ${serviceRoleKey}`,
                'apikey': serviceRoleKey
            }
        });

        if (!aiEmployeeResponse.ok) {
            throw new Error('Failed to fetch AI employee details');
        }

        const aiEmployees = await aiEmployeeResponse.json();
        if (!aiEmployees || aiEmployees.length === 0) {
            throw new Error('AI employee not found');
        }

        const aiEmployee = aiEmployees[0];
        console.log('AI Employee verified:', aiEmployee.name_en);

        // Create demo request
        const demoRequestData = {
            user_id: userId,
            ai_employee_id: aiEmployeeId,
            company: company || null,
            use_case: useCase || null,
            scheduled_date: scheduledDate ? new Date(scheduledDate).toISOString() : null,
            status: 'pending',
            notes: contactInfo || null,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };

        console.log('Creating demo request in database...');

        const demoResponse = await fetch(`${supabaseUrl}/rest/v1/demo_requests`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${serviceRoleKey}`,
                'apikey': serviceRoleKey,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify(demoRequestData)
        });

        if (!demoResponse.ok) {
            const errorText = await demoResponse.text();
            console.error('Failed to create demo request:', errorText);
            throw new Error(`Failed to create demo request: ${errorText}`);
        }

        const demoRequest = await demoResponse.json();
        console.log('Demo request created successfully:', demoRequest[0].id);

        // Update user profile if provided and user exists
        if (userId && company) {
            try {
                await fetch(`${supabaseUrl}/rest/v1/profiles?user_id=eq.${userId}`, {
                    method: 'PATCH',
                    headers: {
                        'Authorization': `Bearer ${serviceRoleKey}`,
                        'apikey': serviceRoleKey,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        company: company,
                        updated_at: new Date().toISOString()
                    })
                });
                console.log('User profile updated with company information');
            } catch (profileError) {
                console.warn('Failed to update user profile:', profileError.message);
                // Don't fail the entire request if profile update fails
            }
        }

        const result = {
            data: {
                demoRequestId: demoRequest[0].id,
                aiEmployee: {
                    name: aiEmployee.name_en,
                    title: aiEmployee.title_en
                },
                status: 'pending',
                message: 'Demo request submitted successfully. Our team will contact you within 24 hours.',
                scheduledDate: scheduledDate || null,
                timestamp: new Date().toISOString()
            }
        };

        console.log('Demo request completed successfully');

        return new Response(JSON.stringify(result), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Demo request error:', error);

        const errorResponse = {
            error: {
                code: 'DEMO_REQUEST_FAILED',
                message: error.message,
                timestamp: new Date().toISOString()
            }
        };

        return new Response(JSON.stringify(errorResponse), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
});