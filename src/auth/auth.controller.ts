import { Controller, Post, Body, Request } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('/login')
    async login(@Body() body): Promise<{ status: boolean, result: any}> {
        const result = await this.authService.login(body)
        return { status: true, result };
    }

    @Post('/registration')
    async registration(@Body() body): Promise<{ status: boolean, result: any}> {
        const result = await this.authService.registration(body)
        return { status: true, result };
    }
}
