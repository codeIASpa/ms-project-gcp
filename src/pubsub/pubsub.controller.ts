import { Controller, Post, Body } from '@nestjs/common';
import { MessagePattern, Payload, Ctx } from '@nestjs/microservices';
import { PubSubService } from './pubsub.service';

@Controller('pubsub')
export class PubSubController {
  constructor(private readonly pubSubService: PubSubService) {}

  @Post('publish')
  async publishMessage(@Body() data: any) {
    await this.pubSubService.publishMessage(data);
  }

  @MessagePattern('gcp-test')
  async receiveMessage(@Payload() data: any, @Ctx() context: any) {
    try {
      this.pubSubService.handleMessage(data, context);
    } catch (error) {
      console.log('Error handling message ack:', error);
      context.ack();
    }
  }

  @MessagePattern('gcp-atribute')
  async receiveAtribute(@Payload() data: any, @Ctx() context: any) {
    try {
      this.pubSubService.handleMessageEvent(data, context);
    } catch (error) {
      console.log('Error handling message ack:', error);
      context.ack();
    }
  }
}
