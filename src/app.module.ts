import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PubsubModule } from './pubsub/pubsub.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PubsubModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
