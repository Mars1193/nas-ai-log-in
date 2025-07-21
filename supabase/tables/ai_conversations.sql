CREATE TABLE ai_conversations (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL,
    ai_employee_id INTEGER NOT NULL,
    conversation_data JSONB NOT NULL,
    session_id VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);