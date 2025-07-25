from fastapi import WebSocket
from typing import Dict, List
import uuid

class ConnectionManager:
    def __init__(self):
        # A dictionary to hold active connections, mapping user_id to their WebSocket object
        self.active_connections: Dict[uuid.UUID, WebSocket] = {}

    async def connect(self, user_id: uuid.UUID, websocket: WebSocket):
        """Accepts a new WebSocket connection and associates it with a user_id."""
        await websocket.accept()
        self.active_connections[user_id] = websocket

    def disconnect(self, user_id: uuid.UUID):
        """Removes a user's WebSocket connection."""
        if user_id in self.active_connections:
            del self.active_connections[user_id]

    async def send_task_to_user(self, user_id: uuid.UUID, message: str):
        """Sends a specific task/message to a specific user's local agent."""
        websocket = self.active_connections.get(user_id)
        if websocket:
            await websocket.send_text(message)

# Create a single instance of the manager to be used across the application
manager = ConnectionManager()
