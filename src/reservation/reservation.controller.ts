import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetReservationDto } from 'src/reservation/dto/get-reservation.dto';
import { ReservationService } from 'src/reservation/reservation.service';
import { GetReservationResponseDto } from './response/get-reservation.response.dto';

@Controller('reservation')
@ApiTags('Reservation')
export class ReservationController {
  constructor(private reservationService: ReservationService) {}

  @Get('amenity')
  async getReservationsByAmenityId(
    @Query() query: GetReservationDto,
  ): Promise<GetReservationResponseDto[]> {
    return this.reservationService.getReservationsByAmenityId(query);
  }
}
