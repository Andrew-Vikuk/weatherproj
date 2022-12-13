import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('/login')
    login(@Body() body){
        return this.authService.login(body);
    }

    @Post('/registration')
    registration(@Body() body) {
        return this.authService.registration(body)
    }
}
