"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const Post_1 = require("./Post");
const bcrypt = require("bcryptjs");
let UsersService = class UsersService {
    async getPosts() {
        const user = await Post_1.default.find();
        return user;
    }
    async getUser(id) {
        const user = await Post_1.default.findById(id);
        return user;
    }
    async createPost(body) {
        const hashPassword = await bcrypt.hash(body.password, 5);
        const user = await Post_1.default.create({ name: body.name, password: hashPassword });
        return user;
    }
    async updatePost(body) {
        const user = await Post_1.default.findByIdAndUpdate(body._id, body, { new: true });
        return user;
    }
    async deletePost(id) {
        const user = await Post_1.default.findByIdAndDelete(id);
        return user;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map