CREATE TABLE demo_requests (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL,
    ai_employee_id INTEGER NOT NULL,
    company VARCHAR(255),
    use_case TEXT,
    scheduled_date TIMESTAMP WITH TIME ZONE,
    status VARCHAR(50) DEFAULT 'pending',
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);