import { ApiProperty } from '@nestjs/swagger';
import { Reservation } from '../../database/entities';
import { GetReservationResponseDto } from './get-reservation.response.dto';

export class ReservationByUserResponseDto {
  @ApiProperty()
  date: Date;

  @ApiProperty({ type: GetReservationResponseDto, isArray: true })
  reservations: GetReservationResponseDto[];

  constructor(res: { date: Date; reservations: Reservation[] }) {
    this.date = res.date;
    this.reservations = res.reservations.map(
      (el) => new GetReservationResponseDto(el),
    );
  }
}
