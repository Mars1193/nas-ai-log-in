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