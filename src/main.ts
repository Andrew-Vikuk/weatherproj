import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose'
require('dotenv').config();

const db = process.env.DB_URL
const port = process.env.PORT
async function bootstrap() {
  await mongoose.connect(db)
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(port, () => console.log('SERVER STARTED ON PORT ' + port));
}

bootstrap();
