import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import compression from 'compression';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(compression());
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Movies QR code')
    .setDescription('API service to power Movies QR code')
    .setVersion('1.0')
    .addBearerAuth()
    .setContact('Christain Tochukwu', '', '')
    .setExternalDoc('Postman Collection', '/api-json')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document);
  await app.listen(3000);
}
bootstrap();
