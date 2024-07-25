import { Module } from '@nestjs/common';
import { PubSubService } from './pubsub.service';
import { PubSubController } from './pubsub.controller';
import { TuristicService } from '../turistic/turistic.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PubSubService, TuristicService],
  controllers: [PubSubController],
})
export class PubsubModule {}
