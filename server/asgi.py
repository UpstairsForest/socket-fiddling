import os

from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.security.websocket import OriginValidator
from django.urls import path

from server import settings
from server.consumers import EchoConsumer

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "server.settings")

# source:
# https://esketchers.com/django-websockets-a-complete-beginners-guide/

application = ProtocolTypeRouter(
    {
        "websocket": AuthMiddlewareStack(
            OriginValidator(
                URLRouter(
                    [
                        path("opa/", EchoConsumer.as_asgi()),
                    ]
                ),
                settings.ALLOWED_HOSTS,
            )
        ),
    }
)

# to test run in browser:
# ws = new WebSocket("ws://localhost:8000/opa/")

