import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // This is a security risk, but it's fine for this exercise.
  await app.listen(3000);
}
bootstrap();
