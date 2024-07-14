import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PubSubServer } from './customTransport/pubSubServer';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    strategy: new PubSubServer({
      topic: process.env.GCP_TOPIC,
      subscription: process.env.GCP_SUSCRIPTION,
      projectId: process.env.GCP_PROJECT,
      keyFilename: process.env.GCP_KEYFILENAME,
    }),
  });

  await app.listen();
}
bootstrap();
