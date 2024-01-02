import { AuthenticateService } from './authenticate.service';
export declare class AuthenticateController {
    private readonly authenticateService;
    constructor(authenticateService: AuthenticateService);
    create(createAuthenticateDto: any): Promise<{
        token: string;
        status: string;
    }>;
    findAll(dto: any): Promise<{
        msg: string;
        token?: undefined;
        status?: undefined;
    } | {
        token: string;
        status: string;
        msg?: undefined;
    }>;
    addTask(content: any): Promise<{
        status: string;
    }>;
    getAllTasks(content: any): Promise<JSON[] | {
        status: string;
    }>;
}
