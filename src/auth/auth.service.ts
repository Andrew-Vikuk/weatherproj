import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import Post from '../users/Post'
import * as bcrypt from 'bcryptjs'
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService){}

    async login(body){
        const user = await this.validateUser(body)
        return this.generateToken(user)
    }

    async registration(body){
        const candidate = await Post.findOne({name: body.params.name});
        if (candidate) {
            throw new Error("A user with this email exists");
        }
        
                const user = await this.userService.createPost(body)
                return this.generateToken(user)
    }

    async generateToken(user){
        const paylod = {name: user.name, id: user.id, type: user.type}
        return {
            token: this.jwtService.sign(paylod)
        }
    }

    async validateUser(body){
        const user = await Post.findOne({name: body.params.name})
        const passwordEquals = await bcrypt.compare(body.params.password, user.password)
        if (user && passwordEquals) {
            return user;
        }
        throw new Error('Incorrect username or password')
    }
}
