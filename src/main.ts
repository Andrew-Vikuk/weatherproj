import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose'


const DBURL = 'mongodb+srv://WeatherUser:gordon123@weather.geysrty.mongodb.net/Users?retryWrites=true&w=majority'
const DB_URL = 'mongodb+srv://Mykola:gordon123@cluster0.phcdol2.mongodb.net/Users?retryWrites=true&w=majority';
const PORT = 5000
async function bootstrap() {
  await mongoose.connect(DBURL)
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
}

bootstrap();
