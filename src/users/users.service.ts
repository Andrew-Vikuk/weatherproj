import { Injectable } from '@nestjs/common';
import Post from './Post'


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
    const user = await Post.create({name: body.params.name, password: body.params.password});
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
