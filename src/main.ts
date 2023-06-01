import "dotenv/config"
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";
import * as express from "express";
// import { AuthGuard } from "./Guards/auth_Guards";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalGuards(new AuthGuard(new Reflector()));
  app.use('/images', express.static('uploads/images'))
  app.enableCors()
  const port = process.env.PORT
  await app.listen(port, ()=>{
    console.log(`server berjalan di port ${port}`)
  });
}
bootstrap();
