import { Injectable } from '@nestjs/common';
import Post from './Post'
import * as bcrypt from 'bcryptjs'

@Injectable()
export class UsersService {
  async getPosts() {
    const user = await Post.find();
    return user;
  }

  async getUser(id) {
    const user = await Post.findById(id);
    return user;
  }

  async createPost(body) {
    const hashPassword = await bcrypt.hash(body.password, 5);
    const user = await Post.create({name: body.name, password: hashPassword});
    return user;
  }

  async updatePost(body) {
    const user = await Post.findByIdAndUpdate(body._id, body, {new: true});
    return user;
  }

  async deletePost(id) {
    const user = await Post.findByIdAndDelete(id);
    return user;
  }
}
