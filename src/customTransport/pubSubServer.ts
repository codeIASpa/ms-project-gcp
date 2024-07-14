import { Server, CustomTransportStrategy } from '@nestjs/microservices';
import { PubSub, Subscription } from '@google-cloud/pubsub';
import { MessageHandler } from '@nestjs/microservices/interfaces';

export class PubSubServer extends Server implements CustomTransportStrategy {
  private readonly pubSubClient: PubSub;
  private subscription: Subscription;

  constructor(private readonly options: any) {
    super();
    this.pubSubClient = new PubSub(options);
  }

  async listen(callback: () => void) {
    const { subscription } = this.options;
    this.subscription = this.pubSubClient.subscription(subscription);

    this.subscription.on('message', this.handleMessage.bind(this));
    this.subscription.on('error', this.handleError.bind(this));

    callback();
  }

  close() {
    this.subscription.close();
  }

  private async handleMessage(message) {
    try {
      const { data, attributes } = message;
      const messageData = JSON.parse(data.toString());

      // Here, you can add more conditions to match different patterns and attributes
      const pattern = attributes.pattern || attributes.eventType || 'gcp-test';

      const handler: MessageHandler = this.getHandlerByPattern(pattern);
      if (!handler) {
        return;
      }

      const response$ = this.transformToObservable(
        await handler(messageData, message),
      );
      response$ && this.send(response$, () => {});
    } catch (error) {
      console.log('Error handling message ack:', error);
      message.ack();
    }
  }

  protected handleError(error) {
    console.error('Error receiving message:', error);
  }
}
