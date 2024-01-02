/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateAuthenticateDto } from './dto/create-authenticate.dto';
import { JwtService } from '@nestjs/jwt';
import { Authenticate } from './entities/authenticate.entity';
import { Model } from 'mongoose';
export declare class AuthenticateService {
    private authModel;
    private jwtService;
    constructor(authModel: Model<Authenticate>, jwtService: JwtService);
    signUp(createAuthenticateDto: CreateAuthenticateDto): Promise<{
        token: string;
        status: string;
    }>;
    signIn(dto: CreateAuthenticateDto, email: string): Promise<{
        msg: string;
        token?: undefined;
        status?: undefined;
    } | {
        token: string;
        status: string;
        msg?: undefined;
    }>;
    findAll(email: string): Promise<JSON[] | {
        status: string;
    }>;
    update(task: JSON, email: string): Promise<{
        status: string;
    }>;
}
