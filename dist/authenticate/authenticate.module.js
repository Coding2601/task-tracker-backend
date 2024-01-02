"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateModule = void 0;
const common_1 = require("@nestjs/common");
const authenticate_service_1 = require("./authenticate.service");
const authenticate_controller_1 = require("./authenticate.controller");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("./jwt.strategy");
const mongoose_1 = require("@nestjs/mongoose");
const authenticate_entity_1 = require("./entities/authenticate.entity");
const config_1 = require("@nestjs/config");
let AuthenticateModule = class AuthenticateModule {
};
exports.AuthenticateModule = AuthenticateModule;
exports.AuthenticateModule = AuthenticateModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.registerAsync({
                inject: [config_1.ConfigService],
                useFactory: (config) => {
                    return {
                        secret: config.get('JWT_SECRET'),
                        signOptions: {
                            expiresIn: config.get('JWT_EXPIRES'),
                        },
                    };
                },
            }),
            mongoose_1.MongooseModule.forRoot('mongodb://mongo:cCafbEH54Ed3G2D4ecBFb6h54F5cf4CG@roundhouse.proxy.rlwy.net:49991/test'),
            mongoose_1.MongooseModule.forFeature([{ name: 'auth', schema: authenticate_entity_1.Auth }]),
        ],
        controllers: [authenticate_controller_1.AuthenticateController],
        providers: [authenticate_service_1.AuthenticateService, jwt_strategy_1.JwtStrategy],
        exports: [jwt_strategy_1.JwtStrategy],
    })
], AuthenticateModule);
//# sourceMappingURL=authenticate.module.js.map