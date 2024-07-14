<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


# Proyecto de Microservicios con NestJS y Google Cloud Pub/Sub

Este proyecto es un ejemplo de cómo construir una aplicación basada en microservicios usando NestJS y Google Cloud Pub/Sub.

## Descripción

La aplicación consta de los siguientes componentes principales:

- **Microservicio principal**: Configurado para usar PubSub como estrategia de transporte.
- **Controlador PubSub**: Maneja la publicación y recepción de mensajes.
- **Servicio PubSub**: Gestiona la lógica de negocio relacionada con PubSub.
- **Estrategia de Transporte Personalizada**: Implementación personalizada de la estrategia de transporte para PubSub.

## Requisitos Previos

- Node.js (versión 12 o superior)
- NestJS CLI
- Cuenta de Google Cloud con Pub/Sub habilitado

## Variables de Entorno

Asegúrate de crear un archivo `.env` en la raíz de tu proyecto con las siguientes variables de entorno:

```
GCP_TOPIC=gcp-test
GCP_SUSCRIPTION=gcp-test-sub
GCP_PROJECT=gen-lang-client-0695389553
GCP_KEYFILENAME=../gen-lang-client.json
```



## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu_usuario/tu_repositorio.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd tu_repositorio
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```

## Uso

### Arranque de la Aplicación

Para iniciar la aplicación, ejecuta:

```bash
npm run start:dev


Publicación de Mensajes
Para publicar un mensaje, haz una solicitud POST a http://localhost:3000/pubsub/publish con el cuerpo del mensaje en formato JSON.

Arquitectura del Proyecto
Microservicio Principal
El microservicio principal está configurado para usar Google Cloud Pub/Sub como estrategia de transporte. Las variables de entorno son utilizadas para definir los parámetros de configuración de Pub/Sub, como el nombre del tópico, la suscripción, el ID del proyecto y la ruta al archivo de claves.

Controlador PubSub
El controlador PubSub maneja las solicitudes HTTP para publicar mensajes en el tópico de Pub/Sub y define los patrones de mensajes que el servicio debe escuchar. Este controlador tiene métodos para publicar mensajes y recibir mensajes según patrones específicos.

Servicio PubSub
El servicio PubSub contiene la lógica de negocio para manejar los mensajes recibidos y publicados. Implementa métodos para publicar mensajes en Pub/Sub y manejar los mensajes que llegan a través de la suscripción. También maneja eventos específicos basados en atributos de los mensajes.

Estrategia de Transporte Personalizada
La estrategia de transporte personalizada implementa la lógica para conectar con Google Cloud Pub/Sub y manejar los mensajes de forma eficiente. Esta estrategia se encarga de suscribirse a un tópico específico, escuchar mensajes y delegar el procesamiento de estos a los manejadores apropiados. También gestiona los errores y asegura que los mensajes sean reconocidos (ack) correctamente después de ser procesados.

Funcionamiento de la Lectura de Mensajes
Suscripción: La estrategia de transporte personalizada se suscribe a un tópico de Pub/Sub utilizando la configuración proporcionada en las variables de entorno.
Recepción de Mensajes: Los mensajes recibidos en la suscripción son manejados por la estrategia personalizada, que delega el procesamiento de los mensajes al servicio PubSub.
Procesamiento: El servicio PubSub procesa los mensajes, ejecutando la lógica de negocio necesaria y confirmando la recepción de los mensajes (ack).
Esta arquitectura permite construir un sistema escalable y modular, donde cada componente se encarga de una responsabilidad específica, asegurando una separación clara de preocupaciones y facilitando el mantenimiento y la escalabilidad del sistema.

#Englisg 
# Microservices Project with NestJS and Google Cloud Pub/Sub

This project is an example of how to build a microservices-based application using NestJS and Google Cloud Pub/Sub.

## Description

The application consists of the following main components:

- **Main Microservice**: Configured to use PubSub as the transport strategy.
- **PubSub Controller**: Handles message publishing and receiving.
- **PubSub Service**: Manages business logic related to PubSub.
- **Custom Transport Strategy**: Custom implementation of the transport strategy for PubSub.

## Prerequisites

- Node.js (version 12 or higher)
- NestJS CLI
- Google Cloud account with Pub/Sub enabled

## Environment Variables

Make sure to create a `.env` file at the root of your project with the following environment variables:

GCP_TOPIC=gcp-test
GCP_SUSCRIPTION=gcp-test-sub
GCP_PROJECT=gen-lang-client-0695389553
GCP_KEYFILENAME=../gen-lang-client.json


## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your_user/your_repository.git
    ```
2. Navigate to the project directory:
    ```bash
    cd your_repository
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

### Starting the Application

To start the application, run:

```bash
npm run start:dev

Publishing Messages
To publish a message, make a POST request to http://localhost:3000/pubsub/publish with the message body in JSON format.

Project Architecture
Main Microservice
The main microservice is configured to use Google Cloud Pub/Sub as the transport strategy. Environment variables are used to define the Pub/Sub configuration parameters, such as the topic name, subscription, project ID, and key file path.

PubSub Controller
The PubSub controller handles HTTP requests to publish messages to the Pub/Sub topic and defines the message patterns the service should listen to. This controller has methods to publish messages and receive messages based on specific patterns.

PubSub Service
The PubSub service contains the business logic to handle the received and published messages. It implements methods to publish messages to Pub/Sub and handle messages that arrive through the subscription. It also handles specific events based on message attributes.

Custom Transport Strategy
The custom transport strategy implements the logic to connect to Google Cloud Pub/Sub and handle messages efficiently. This strategy subscribes to a specific topic, listens for messages, and delegates the processing of these messages to the appropriate handlers. It also manages errors and ensures that messages are acknowledged correctly after being processed.

Message Handling Process
Subscription: The custom transport strategy subscribes to a Pub/Sub topic using the configuration provided in the environment variables.
Message Reception: Messages received in the subscription are handled by the custom strategy, which delegates the processing of the messages to the PubSub service.
Processing: The PubSub service processes the messages, executing the necessary business logic and acknowledging the messages after they are processed.
This architecture allows building a scalable and modular system, where each component is responsible for a specific task, ensuring clear separation of concerns and facilitating maintenance and scalability of the system.



