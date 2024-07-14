import { Module } from '@nestjs/common';
import { PubSubService } from './pubsub.service';
import { PubSubController } from './pubsub.controller';

@Module({
  providers: [PubSubService],
  controllers: [PubSubController],
})
export class PubsubModule {}
