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
import { Document } from 'mongoose';
export declare class Authenticate extends Document {
    static email(email: any): (target: typeof import('../jwt.strategy').JwtStrategy, propertyKey: undefined, parameterIndex: 0) => void;
    email: string;
    password: string;
    tasks: Array<JSON>;
}
export declare const Auth: import("mongoose").Schema<Authenticate, import("mongoose").Model<Authenticate, any, any, any, Document<unknown, any, Authenticate> & Authenticate & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Authenticate, Document<unknown, {}, import("mongoose").FlatRecord<Authenticate>> & import("mongoose").FlatRecord<Authenticate> & {
    _id: import("mongoose").Types.ObjectId;
}>;
