import { Controller, Get, Post, Put, Delete, Body, Request } from '@nestjs/common';
import path from 'path';
import { UsersService } from "./users.service";

var username = document.getElementById('login');
var pass = document.getElementById('pass');
class User  {
    name: string;
    password: string;
    constructor(name: string, password:string){
      this.name = name;
      this.password = password;
    }
}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Get('posts')
  async getClients(): Promise<{ status: boolean, result: any }> {
    const result = await this.usersService.getPosts();
    return { status: true, result };
  }

  @Get(':id')
  async getClient(@Request() req): Promise<{ status: boolean, result: any }> {
    const result = await this.usersService.getUser(req.params.id);
    return { status: true, result };
  }

  @Post('create')
  async createClient(@Body() body): Promise<{ status: boolean, result: any}> {
    const result = await this.usersService.createPost(body);
    return { status: true, result };
  }

  @Put('update')
  async updateClient(@Body() body): Promise<{ status: boolean, result: any}> {
    const result = await this.usersService.updatePost(body);
    return { status: true, result };
  }

  @Delete(':id')
  async deleteClient(@Request() req): Promise<{ status: boolean, result: any }> {
    const result = await this.usersService.deletePost(req.params.id);
    return { status: true, result };
  }
}
