import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);

  //Swagger config
  const config = new DocumentBuilder()
    .setTitle('Nest JS Demo')
    .setDescription('Jam with nest js')
    .setVersion('1.0')
    .addTag('nsestjs-demo')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
