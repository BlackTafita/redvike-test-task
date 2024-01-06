import { ApiProperty } from '@nestjs/swagger';
import * as moment from 'moment';
import { Reservation } from '../../database/entities';

export class GetReservationResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  startTime: string;

  @ApiProperty()
  duration: number;

  @ApiProperty()
  amenityName: string;

  constructor(reservation: Reservation) {
    console.log(reservation);
    this.id = reservation.id;
    this.userId = reservation.userId;
    this.amenityName = reservation.amenity.name;

    const startDate = moment(reservation.date).add(
      reservation.startTime,
      'minutes',
    );
    const endDate = moment(reservation.date).add(
      reservation.endTime,
      'minutes',
    );

    this.startTime = startDate.format('HH:MM');
    this.duration = endDate.diff(startDate, 'minutes');
  }
}
