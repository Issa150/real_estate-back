import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  });

  app.use(cookieParser());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips unknown properties
      forbidNonWhitelisted: true, // throws if unknown properties are sent
      transform: true, // auto-transform payloads to DTO classes
    }),
  );

  // 🔐 Optional: Trust proxy if behind a reverse proxy (e.g. for secure cookies)
  // app.set('trust proxy', 1);

  // 🔐 Optional: Rate limiting (e.g. with express-rate-limit)
  // const rateLimit = require('express-rate-limit');
  // app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
