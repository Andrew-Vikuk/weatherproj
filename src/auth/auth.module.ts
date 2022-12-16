import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {UsersModule} from "../users/users.module";
import {JwtModule} from "@nestjs/jwt";
import {forwardRef, Module} from '@nestjs/common';

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [
        forwardRef(() => UsersModule),
        JwtModule.register({
          secret: 'SECRET',
          signOptions: {
            expiresIn: '24h'
          }
        })
    ],
      exports: [
          AuthService,
          JwtModule
      ]
  })
export class AuthModule {}
