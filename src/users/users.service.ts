import { UpdateUserDto } from './dtos/update-user.dto';
import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UsersService {
  private users: UserEntity[] = [];

  findAllUsers(): UserEntity[] {
    return this.users;
  }
  findUserById(id: string): UserEntity {
    return this.users.find((user) => user.id == id);
  }

  createUser(createUserDto: CreateUserDto): UserEntity {
    const user: UserEntity = {
      ...createUserDto,
      id: uuid(),
    };
    this.users.push(user);
    return user;
  }

  updateUser(id: string, updateUserDto: UpdateUserDto): UserEntity {
    const index = this.users.findIndex((user) => user.id === id);

    this.users[index] = { ...this.users[index], ...updateUserDto };

    return this.users[index];
  }

  deleteUser(id: string): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
