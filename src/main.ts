import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose'
import cors from 'cors'


const DB_URL = 'mongodb+srv://Mykola:gordon123@cluster0.phcdol2.mongodb.net/Users?retryWrites=true&w=majority';
const PORT = 5000
async function bootstrap() {
  await mongoose.connect(DB_URL)
  const app = await NestFactory.create(AppModule);
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  await app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
}

bootstrap();
