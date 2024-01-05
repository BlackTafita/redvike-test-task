import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString } from 'class-validator';

export class GetReservationDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  amenityId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  timestamp: string;
}
