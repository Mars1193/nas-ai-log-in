import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// Define the structure of a chat message as the client sends it
interface ChatMessage {
  role: 'user' | 'ai' | 'human';
  text: string;
}

Deno.serve(async (req) => {
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    };

    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders });
    }

    try {
        const { message, aiEmployeeId, sessionId, conversationHistory } = await req.json();

        if (!message || !aiEmployeeId) {
            throw new Error('Message and AI employee ID are required');
        }

        const googleApiKey = Deno.env.get('GOOGLE_API_KEY');
        if (!googleApiKey) {
            throw new Error('Google API key not configured in Supabase secrets.');
        }

        const supabase = createClient(
            Deno.env.get('SUPABASE_URL') ?? '',
            Deno.env.get('SUPABASE_ANON_KEY') ?? '',
            { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
        );

        const { data: { user } } = await supabase.auth.getUser();

        const { data: aiEmployee, error: employeeError } = await supabase
            .from('ai_employees')
            .select('*')
            .eq('id', aiEmployeeId)
            .single();

        if (employeeError || !aiEmployee) {
            throw new Error('AI employee not found or error fetching details.');
        }

        // --- CORRECTED CONVERSATION HISTORY CONSTRUCTION ---
        const systemPrompt = `You are ${aiEmployee.name_en}, an AI ${aiEmployee.title_en}. Your capabilities include: ${aiEmployee.capabilities_en.join(', ')}. Your core competencies are: ${aiEmployee.competencies_en.join(', ')}. Respond professionally and helpfully as this character.`;

        const contents = [];

        // Add the system instruction first
        contents.push({
            role: 'user',
            parts: [{ text: `SYSTEM_INSTRUCTION: ${systemPrompt}` }]
        });
        contents.push({
            role: 'model',
            parts: [{ text: "Understood. I will act as the AI Employee described." }]
        });

        // Process the conversation history
        if (conversationHistory && Array.isArray(conversationHistory)) {
            conversationHistory.forEach((msg: ChatMessage) => {
                // Map client roles to Gemini roles ('ai' and 'human' become 'model')
                const role = msg.role === 'user' ? 'user' : 'model';
                contents.push({
                    role: role,
                    parts: [{ text: msg.text }]
                });
            });
        }
        
        // Add the current user message
        contents.push({
            role: 'user',
            parts: [{ text: message }]
        });
        
        // --- END OF CORRECTION ---

        const requestBody = {
            contents: contents,
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 1024,
            },
            safetySettings: [
                { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' }
            ]
        };

        const aiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${googleApiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        if (!aiResponse.ok) {
            const errorText = await aiResponse.text();
            console.error('Google AI API error:', errorText);
            throw new Error(`Google AI API error: ${errorText}`);
        }

        const aiResult = await aiResponse.json();

        if (!aiResult.candidates || aiResult.candidates.length === 0) {
            throw new Error('No response generated from AI');
        }

        const aiReply = aiResult.candidates[0].content.parts[0].text;

        // Store conversation in database if user is logged in
        if (user && sessionId) {
           await supabase.from('ai_conversations').insert({
                user_id: user.id,
                ai_employee_id: aiEmployeeId,
                session_id: sessionId,
                conversation_data: { user_message: message, ai_response: aiReply }
            });
        }

        const result = {
            data: {
                reply: aiReply,
                aiEmployee: { name: aiEmployee.name_en, title: aiEmployee.title_en },
                sessionId,
                timestamp: new Date().toISOString()
            }
        };

        return new Response(JSON.stringify(result), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('AI chat function error:', error);
        return new Response(JSON.stringify({ error: { message: error.message } }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
});
