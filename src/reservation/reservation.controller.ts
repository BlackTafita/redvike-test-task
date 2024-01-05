import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetReservationDto } from 'src/reservation/dto/get-reservation.dto';
import { ReservationService } from 'src/reservation/reservation.service';

@Controller('reservation')
@ApiTags('Reservation')
export class ReservationController {
  constructor(private reservationService: ReservationService) {}

  @Get('')
  async getReservations(@Query() query: GetReservationDto): Promise<any> {
    return this.reservationService.getReservations(query);
  }
}
