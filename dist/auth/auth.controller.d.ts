import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: any): Promise<{
        status: boolean;
        result: any;
    }>;
    registration(body: any): Promise<{
        status: boolean;
        result: any;
    }>;
}
