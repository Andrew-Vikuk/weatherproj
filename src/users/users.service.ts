import { Injectable } from '@nestjs/common';
import { UsersRepository } from "./users.repository";



@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {
  }

  async getPosts() {
    return this.usersRepository.findAll();
  }

  async getUser(id) {
    return this.usersRepository.findUser(id);
  }

  async createPost(body) {
    return this.usersRepository.createUser(body);
  }

  async updatePost(body) {
    return this.usersRepository.updateUser(body);
  }

  async deletePost(id) {
    return this.usersRepository.deleteUser(id);
  }
}
