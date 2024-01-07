import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInResponseDto } from './response/sign-in.response.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  @ApiOkResponse()
  async signUp(@Body() body: SignUpDto): Promise<{ result: 'ok' }> {
    return this.authService.signUp(body);
  }

  @Get('sign-in')
  @ApiOkResponse()
  async signIn(@Query() query: SignInDto): Promise<SignInResponseDto> {
    return this.authService.signIn(query);
  }
}
