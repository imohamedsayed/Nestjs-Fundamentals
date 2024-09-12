import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
@Controller('users')
export class UsersController {
  private users: UserEntity[] = [];

  @Get()
  find(): UserEntity[] {
    return this.users;
  }
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string): UserEntity {
    return this.users.find((user) => user.id == id);
  }
  @Post()
  create(@Body() createUserDto: CreateUserDto): any {
    const user: UserEntity = {
      ...createUserDto,
      id: uuid(),
    };
    this.users.push(user);
    return user;
  }
  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): any {
    const index = this.users.findIndex((user) => user.id === id);

    this.users[index] = { ...this.users[index], ...updateUserDto };

    return { message: `${id} updated`, user: this.users[index] };
  }
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', ParseUUIDPipe) id: string): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
