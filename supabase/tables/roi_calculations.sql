CREATE TABLE roi_calculations (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL,
    current_staff_cost DECIMAL(12,2) NOT NULL,
    ai_replacement_cost DECIMAL(12,2) NOT NULL,
    projected_savings DECIMAL(12,2) NOT NULL,
    calculation_data JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);