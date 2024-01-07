import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../database/entities';

@Injectable()
export class UsersRepository extends Repository<User> {}
