import { Injectable } from '@nestjs/common';
import { Reservation } from 'src/database/entities';
import { GetReservationDto } from 'src/reservation/dto/get-reservation.dto';
import { ReservationRepository } from 'src/reservation/reservation.repository';

@Injectable()
export class ReservationService {
  constructor(private reservationRepository: ReservationRepository) {}

  async getReservations(query: GetReservationDto): Promise<Reservation[]> {
    console.log(query);
    const res = await this.reservationRepository
      .createQueryBuilder()
      .where('amenity_id = :amenityId', { amenityId: Number(query.amenityId) })
      .andWhere('date = :date', {
        date: BigInt(query.timestamp),
      })
      .orderBy('start_time')
      .getMany();

    console.log(res);
    return res;
  }
}
