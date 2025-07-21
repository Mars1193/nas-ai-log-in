CREATE TABLE ai_conversations (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL,
    ai_employee_id INTEGER NOT NULL,
    conversation_data JSONB NOT NULL,
    session_id VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE ai_employees (
    id SERIAL PRIMARY KEY,
    name_en VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255) NOT NULL,
    title_en VARCHAR(255) NOT NULL,
    title_ar VARCHAR(255) NOT NULL,
    description_en TEXT NOT NULL,
    description_ar TEXT NOT NULL,
    capabilities_en TEXT[] NOT NULL,
    capabilities_ar TEXT[] NOT NULL,
    competencies_en TEXT[] NOT NULL,
    competencies_ar TEXT[] NOT NULL,
    model_url VARCHAR(500),
    image_url VARCHAR(500),
    category VARCHAR(100) NOT NULL,
    price_monthly DECIMAL(10,2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

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

CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    email VARCHAR(255) NOT NULL,
    full_name VARCHAR(255),
    company VARCHAR(255),
    phone VARCHAR(50),
    language_preference VARCHAR(10) DEFAULT 'en',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE roi_calculations (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL,
    current_staff_cost DECIMAL(12,2) NOT NULL,
    ai_replacement_cost DECIMAL(12,2) NOT NULL,
    projected_savings DECIMAL(12,2) NOT NULL,
    calculation_data JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);