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
        const { currentStaffData, selectedAiEmployees, timeframe } = await req.json();

        if (!currentStaffData || !selectedAiEmployees || !Array.isArray(selectedAiEmployees)) {
            throw new Error('Current staff data and selected AI employees are required');
        }

        // Get environment variables
        const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
        const supabaseUrl = Deno.env.get('SUPABASE_URL');

        if (!serviceRoleKey || !supabaseUrl) {
            throw new Error('Supabase configuration missing');
        }

        console.log('Processing ROI calculation...');

        // Get user from auth header if provided
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

        // Get AI employee pricing data
        const aiEmployeeIds = selectedAiEmployees.map(emp => emp.id);
        const aiEmployeeResponse = await fetch(`${supabaseUrl}/rest/v1/ai_employees?id=in.(${aiEmployeeIds.join(',')})`, {
            headers: {
                'Authorization': `Bearer ${serviceRoleKey}`,
                'apikey': serviceRoleKey
            }
        });

        if (!aiEmployeeResponse.ok) {
            throw new Error('Failed to fetch AI employee pricing data');
        }

        const aiEmployees = await aiEmployeeResponse.json();
        console.log('AI Employee data retrieved:', aiEmployees.length);

        // Calculate current staff costs
        const currentMonthlyCost = currentStaffData.reduce((total, staff) => {
            return total + (staff.salary || 0) + (staff.benefits || 0) + (staff.overhead || 0);
        }, 0);

        const currentAnnualCost = currentMonthlyCost * 12;

        // Calculate AI replacement costs
        const aiMonthlyCost = aiEmployees.reduce((total, ai) => {
            const selectedAi = selectedAiEmployees.find(sel => sel.id === ai.id);
            const quantity = selectedAi ? selectedAi.quantity || 1 : 1;
            return total + (ai.price_monthly * quantity);
        }, 0);

        const aiAnnualCost = aiMonthlyCost * 12;

        // Calculate savings
        const monthlySavings = currentMonthlyCost - aiMonthlyCost;
        const annualSavings = monthlySavings * 12;
        const timeframeSavings = timeframe === 'monthly' ? monthlySavings : 
                               timeframe === 'quarterly' ? monthlySavings * 3 :
                               timeframe === 'yearly' ? annualSavings :
                               annualSavings; // default to annual

        // Calculate ROI percentage
        const roiPercentage = currentMonthlyCost > 0 ? (monthlySavings / currentMonthlyCost) * 100 : 0;

        // Calculate payback period (in months)
        const implementationCost = aiMonthlyCost; // Assuming 1 month implementation cost
        const paybackPeriod = implementationCost > 0 ? implementationCost / monthlySavings : 0;

        // Prepare detailed breakdown
        const breakdown = {
            currentStaff: {
                monthly: currentMonthlyCost,
                annual: currentAnnualCost,
                positions: currentStaffData.length
            },
            aiEmployees: {
                monthly: aiMonthlyCost,
                annual: aiAnnualCost,
                count: selectedAiEmployees.reduce((sum, ai) => sum + (ai.quantity || 1), 0)
            },
            savings: {
                monthly: monthlySavings,
                annual: annualSavings,
                timeframe: timeframeSavings,
                percentage: roiPercentage
            },
            metrics: {
                roiPercentage: roiPercentage,
                paybackPeriod: paybackPeriod,
                breakEvenPoint: paybackPeriod,
                costReduction: (monthlySavings / currentMonthlyCost) * 100
            },
            projections: {
                year1: annualSavings,
                year2: annualSavings * 2,
                year3: annualSavings * 3,
                year5: annualSavings * 5
            }
        };

        // Create calculation data for storage
        const calculationData = {
            currentStaffData,
            selectedAiEmployees,
            timeframe,
            breakdown,
            calculatedAt: new Date().toISOString()
        };

        // Store calculation in database if user is logged in
        if (userId) {
            try {
                await fetch(`${supabaseUrl}/rest/v1/roi_calculations`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${serviceRoleKey}`,
                        'apikey': serviceRoleKey,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user_id: userId,
                        current_staff_cost: currentMonthlyCost,
                        ai_replacement_cost: aiMonthlyCost,
                        projected_savings: monthlySavings,
                        calculation_data: calculationData
                    })
                });
                console.log('ROI calculation stored in database');
            } catch (dbError) {
                console.warn('Failed to store ROI calculation in database:', dbError.message);
                // Don't fail the entire request if database storage fails
            }
        }

        const result = {
            data: {
                breakdown,
                summary: {
                    currentMonthlyCost,
                    aiMonthlyCost,
                    monthlySavings,
                    annualSavings,
                    roiPercentage,
                    paybackPeriod,
                    timeframeSavings
                },
                recommendations: {
                    strongROI: roiPercentage > 50,
                    quickPayback: paybackPeriod < 3,
                    significantSavings: monthlySavings > 5000,
                    message: roiPercentage > 50 ? 
                            'Excellent ROI potential! This AI implementation could significantly reduce your operational costs.' :
                            roiPercentage > 20 ? 
                            'Good ROI potential. This AI implementation offers solid cost savings.' :
                            'Moderate ROI. Consider starting with a pilot implementation.'
                },
                timestamp: new Date().toISOString()
            }
        };

        console.log('ROI calculation completed successfully');

        return new Response(JSON.stringify(result), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('ROI calculation error:', error);

        const errorResponse = {
            error: {
                code: 'ROI_CALCULATION_FAILED',
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