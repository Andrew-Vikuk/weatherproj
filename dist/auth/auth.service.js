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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const Post_1 = require("../users/Post");
const bcrypt = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async login(body) {
        const user = await this.validateUser(body);
        return this.generateToken(user);
    }
    async registration(body) {
        const candidate = await Post_1.default.findOne({ name: body.name });
        if (candidate) {
            throw new Error("A user with this email exists");
        }
        const user = await this.userService.createPost(body);
        return this.generateToken(user);
    }
    async generateToken(user) {
        const paylod = { name: user.name, id: user.id, type: user.type };
        return {
            token: this.jwtService.sign(paylod)
        };
    }
    async validateUser(body) {
        const user = await Post_1.default.findOne({ name: body.name });
        const passwordEquals = await bcrypt.compare(body.password, user.password);
        if (user && passwordEquals) {
            return user;
        }
        throw new Error('Incorrect username or password');
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService, jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map