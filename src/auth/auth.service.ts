import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import Post from '../users/Post'
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
    constructor(private userService: UsersService){}

    async login(body){

    }

    async registration(body){
        const candidate = await Post.findOne(body.params.name);
        if (candidate) {
            throw new Error("A user with this email exists");
        }
        const hashPassword = await bcrypt.hash(body.params.password, 5);
                const user = await this.userService.createPost({ ...body, password: hashPassword })
                return this.generateToken(user)
    }

    async generateToken(user){
        const paylod = {}
    }
}
