import { Injectable } from '@nestjs/common';
import { Topic } from '@google-cloud/pubsub';

@Injectable()
export class PubSubService {
  private topic: Topic;
  async publishMessage(data: any) {
    const messageBuffer = Buffer.from(JSON.stringify(data));
    await this.topic.publishMessage({ data: messageBuffer });
  }
  handleMessage(message: any, context) {
    console.log('Received message:', message);
    context.ack();
  }
  handleMessageEvent(message: any, context) {
    console.log('Received message for event:', message);
    context.ack();
  }
}
