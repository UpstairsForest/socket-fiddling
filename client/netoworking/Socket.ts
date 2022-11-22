import { BASE_WS_URL, BUTTON_PREFIX } from "./config";

export class Socket {
  ws: WebSocket;
  subscriberCallbacks: Array<Function>;

  constructor() {
    this.ws = new WebSocket(BASE_WS_URL + BUTTON_PREFIX);
    this.subscriberCallbacks = [];
    this.ws.onmessage = (event) => this.onMessage(event);
  }

  onMessage(event: any) {
    const buttonNumber = event["data"];
    for (let sc of this.subscriberCallbacks) {
      sc(buttonNumber);
    }
  }

  subscribe(subscribeCallback: Function) {
    this.subscriberCallbacks.push(subscribeCallback);
  }

  async send(buttonNumber: number) {
    await this.ws.send(JSON.stringify(buttonNumber));
  }
}
