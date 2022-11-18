import { Module, NestModule, MiddlewareConsumer, RequestMethod } from "@nestjs/common";
import { UsersController } from './user.controller';
import { UsersService } from './users.service';
import { UsersRepository } from "./users.repository";

@Module({
    controllers: [UsersController],
    providers: [UsersService, UsersRepository]
  })
  
  export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
      consumer.apply().forRoutes({
        path: 'users/admins',
        method: RequestMethod.GET
      })
    }
  }