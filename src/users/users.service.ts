import { Injectable } from '@nestjs/common';
import { FindOptionsWhere } from 'typeorm';
import { User } from '../database/entities';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly usersReporsitory: UsersRepository) {}

  async findOne(where: FindOptionsWhere<User>): Promise<User> {
    return this.usersReporsitory.findOne({
      where,
    });
  }

  async createOne(data: Partial<User>): Promise<User> {
    const user = this.usersReporsitory.create({
      email: data.email,
      password: await bcrypt.hash(data.password, 10),
    });

    return this.usersReporsitory.save(user);
  }
}
