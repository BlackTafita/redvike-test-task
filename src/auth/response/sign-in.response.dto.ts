import { ApiProperty } from '@nestjs/swagger';

export class SignInResponseDto {
  @ApiProperty()
  access_token: string;

  constructor(token: string) {
    this.access_token = token;
  }
}
