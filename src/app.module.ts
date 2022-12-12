import { Module } from "@nestjs/common";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
    imports:[
        ConfigModule.forRoot({
            envFilePath: '.env'
          }),
          UsersModule,
          AuthModule],
    controllers: [AuthController],
    providers: [AuthService]
})

export class AppModule{}