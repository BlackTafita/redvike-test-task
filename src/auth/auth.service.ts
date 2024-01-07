import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import * as bcrypt from 'bcrypt';
import { SignInResponseDto } from './response/sign-in.response.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(data: SignUpDto): Promise<{ result: 'ok' }> {
    await this.usersService.createOne(data);
    return { result: 'ok' };
  }

  async signIn(data: SignInDto): Promise<SignInResponseDto> {
    const user = await this.usersService.findOne({ email: data.email });
    const isSignIn = await bcrypt.compare(data.password, user.password);
    console.log(user.password, data);
    if (!isSignIn) {
      throw new UnauthorizedException();
    }

    const token = await this.jwtService.signAsync({
      id: user.id,
      email: user.email,
    });
    return new SignInResponseDto(token);
  }
}
