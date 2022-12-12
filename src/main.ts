import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose'
require('dotenv').config();

const db2 = process.env.DBURL;
const DB = 'mongodb+srv://WeatherUser:gordon123@weather.geysrty.mongodb.net/Users?retryWrites=true&w=majority'
const PORT = 5000
async function bootstrap() {
  console.log(process.env.DBURL);
  await mongoose.connect(db2)
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
}

bootstrap();
