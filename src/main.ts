import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enabling cors
  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'Get, Post, Put, Delete, Head'
  })
  await app.listen(3000);
}
bootstrap();
