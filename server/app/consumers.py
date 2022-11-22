from channels.generic.websocket import AsyncJsonWebsocketConsumer


class PracticeConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        await self.channel_layer.group_add("chat", self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard("chat", self.channel_name)

    async def receive(self, text_data="opa", bytes_data=None, **kwargs):
        await self.channel_layer.group_send("chat", {"type": "chat.message", "text": text_data})

    async def chat_message(self, event):
        await self.send(text_data=event["text"])
