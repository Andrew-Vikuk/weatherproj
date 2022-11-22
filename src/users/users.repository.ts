import { Injectable } from '@nestjs/common';
import Post from './Post'

@Injectable()
export class UsersRepository {
  async findAll() {
    const user = await Post.find();
    return user;
  }

  async findUser(id) {
    const user = await Post.findById(id);
    return user;
  }

  async createUser(body) {
    const user = await Post.create({name: body.params.name, password: body.params.password});
    return user;
  }

  async updateUser(body) {
    const user = await Post.findByIdAndUpdate(body._id, body, {new: true});
    return user;
  }

  async deleteUser(id) {
    const user = await Post.findByIdAndDelete(id);
    return user;
  }
}
