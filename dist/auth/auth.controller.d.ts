import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        status: boolean;
        result: any;
    }>;
    registration(req: any): Promise<{
        status: boolean;
        result: any;
    }>;
}
