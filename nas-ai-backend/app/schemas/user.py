# File: app/schemas.py
from pydantic import BaseModel, EmailStr
import uuid
from datetime import datetime

# This is the base model, contains fields common to reading user data
class UserBase(BaseModel):
    email: EmailStr
    username: str
    full_name: str | None = None

# This model is used when creating a new user (expects a password)
class UserCreate(UserBase):
    password: str

# This is the main User schema that will be returned from the API
# It inherits from UserBase and adds fields that should be read, but not written to directly
class User(UserBase):
    id: uuid.UUID
    updated_at: datetime

    class Config:
        # This allows Pydantic to map the data from the database model correctly
        from_attributes = True