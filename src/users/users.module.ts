import { Module, forwardRef } from "@nestjs/common";
import { UsersController } from './user.controller';
import { UsersService } from './users.service';
import { UsersRepository } from "./users.repository";
import {AuthModule} from "../auth/auth.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
      forwardRef(() => AuthModule),
  ],
    exports: [
        UsersService,
    ]
})
export class UsersModule {}