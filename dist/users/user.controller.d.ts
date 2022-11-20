import { UsersService } from "./users.service";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getClients(): Promise<{
        status: boolean;
        result: any;
    }>;
    getClient(req: any): Promise<{
        status: boolean;
        result: any;
    }>;
    createClient(body: any): Promise<{
        status: boolean;
        result: any;
    }>;
    updateClient(body: any): Promise<{
        status: boolean;
        result: any;
    }>;
    deleteClient(req: any): Promise<{
        status: boolean;
        result: any;
    }>;
}
