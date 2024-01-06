import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetReservationDto } from 'src/reservation/dto/get-reservation.dto';
import { ReservationService } from 'src/reservation/reservation.service';
import { GetReservationResponseDto } from './response/get-reservation.response.dto';
import { ReservationByUserResponseDto } from './response/reservation-by-user.response.dto';

@Controller('reservation')
@ApiTags('Reservation')
export class ReservationController {
  constructor(private reservationService: ReservationService) {}

  @Get('amenity')
  @ApiOkResponse({
    type: GetReservationResponseDto,
    isArray: true,
  })
  async getReservationsByAmenityId(
    @Query() query: GetReservationDto,
  ): Promise<GetReservationResponseDto[]> {
    return this.reservationService.getReservationsByAmenityId(query);
  }

  @Get('user')
  @ApiOkResponse({
    type: ReservationByUserResponseDto,
    isArray: true,
  })
  async getReservationsByUserId(
    @Query('userId') userId: string,
  ): Promise<void> {
    return this.reservationService.getReservationsByUserId(userId);
  }
}
