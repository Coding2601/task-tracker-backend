"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const mongoose_2 = require("mongoose");
const argon = require("argon2");
let AuthenticateService = class AuthenticateService {
    constructor(authModel, jwtService) {
        this.authModel = authModel;
        this.jwtService = jwtService;
    }
    async signUp(createAuthenticateDto) {
        const hashPass = await argon.hash(createAuthenticateDto.password);
        createAuthenticateDto.password = hashPass;
        const newUser = new this.authModel(createAuthenticateDto);
        const user = await newUser.save();
        const token = this.jwtService.sign({ id: user._id });
        return { token: token, status: 'ok' };
    }
    async signIn(dto, email) {
        const x = await this.authModel.findOne({ email });
        if (!x) {
            return { msg: 'Incorrect Credential' };
        }
        const match = await argon.verify(x.password, dto.password);
        if (!match) {
            return { msg: 'Failed' };
        }
        const token = this.jwtService.sign({ id: x._id });
        return { token: token, status: 'ok' };
    }
    async findAll(email) {
        console.log(email);
        const user = await this.authModel.findOne({ email });
        if (user === null) {
            return { status: 'failed' };
        }
        return user.tasks;
    }
    async update(task, email) {
        const user = await this.authModel.updateOne({ email }, { $push: { tasks: task } });
        if (user === null) {
            return { status: 'failed' };
        }
        return { status: 'ok' };
    }
};
exports.AuthenticateService = AuthenticateService;
exports.AuthenticateService = AuthenticateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('auth')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], AuthenticateService);
//# sourceMappingURL=authenticate.service.js.map