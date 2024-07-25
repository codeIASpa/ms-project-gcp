import { Injectable } from '@nestjs/common';
import { Topic } from '@google-cloud/pubsub';
import { TuristicService } from '../turistic/turistic.service';

@Injectable()
export class PubSubService {
  private topic: Topic;
  constructor(private readonly turisticService: TuristicService) {}
  async publishMessage(data: any) {
    const messageBuffer = Buffer.from(JSON.stringify(data));
    await this.topic.publishMessage({ data: messageBuffer });
  }
  async handleMessage(message: any, context) {
    console.log('Received message:', message);
    await this.saveTuristicData(message);
    context.ack();
  }
  handleMessageEvent(message: any, context) {
    console.log('Received message for event:', message);
    context.ack();
  }

  private async saveTuristicData(message: any) {
    const TuristicData = {
      title: message.title,
      description: message.description,
      header: message.header,
      image: message.image,
      things_to_do: message.things_to_do,
      attractions: message.attractions,
    };
    await this.turisticService.createTuristic(TuristicData);
  }
}
