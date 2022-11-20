"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
const Post_1 = require("./Post");
let UsersRepository = class UsersRepository {
    async findAll() {
        const user = await Post_1.default.find();
        return JSON.stringify(user);
    }
    async findUser(id) {
        const user = await Post_1.default.findById(id);
        return user;
    }
    async createUser(body) {
        const user = await Post_1.default.create(body);
        return user;
    }
    async updateUser(body) {
        const user = await Post_1.default.findByIdAndUpdate(body._id, body, { new: true });
        return user;
    }
    async deleteUser(id) {
        const user = await Post_1.default.findByIdAndDelete(id);
        return user;
    }
};
UsersRepository = __decorate([
    (0, common_1.Injectable)()
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map