import { Controller, Post, Body, Request } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('/login/:name/:password')
    async login(@Request() req): Promise<{ status: boolean, result: any}> {
        const result = await this.authService.login(req)
        return { status: true, result };
    }

    @Post('/registration/:name/:password')
    async registration(@Request() req): Promise<{ status: boolean, result: any}> {
        const result = await this.authService.registration(req)
        return { status: true, result };
    }
}
