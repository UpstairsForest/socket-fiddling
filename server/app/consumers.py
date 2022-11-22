from channels.generic.websocket import AsyncJsonWebsocketConsumer


class PracticeConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        await self.channel_layer.group_add(
            PracticeConsumer.get_group_name(), self.channel_name
        )
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            PracticeConsumer.get_group_name(), self.channel_name
        )

    async def receive(self, text_data="opa", bytes_data=None, **kwargs):
        await self.channel_layer.group_send(
            PracticeConsumer.get_group_name(),
            {
                "type": "buttons.send",
                "text": text_data,
                "channel_name": self.channel_name,
            },
        )

    async def buttons_send(self, event):
        # send only to 'others'
        if self.channel_name != event["channel_name"]:
            await self.send(text_data=event["text"])

    @staticmethod
    def get_group_name() -> str:
        return "buttons"
