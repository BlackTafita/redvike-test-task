import { Injectable } from '@nestjs/common';
import { GetReservationDto } from 'src/reservation/dto/get-reservation.dto';
import { ReservationRepository } from 'src/reservation/reservation.repository';
import { GetReservationResponseDto } from './response/get-reservation.response.dto';

@Injectable()
export class ReservationService {
  constructor(private reservationRepository: ReservationRepository) {}

  async getReservationsByAmenityId(
    query: GetReservationDto,
  ): Promise<GetReservationResponseDto[]> {
    console.log(query);
    const res = await this.reservationRepository
      .createQueryBuilder('r')
      .where('"amenityId" = :amenityId', { amenityId: Number(query.amenityId) })
      .andWhere('date = :date', {
        date: new Date(Number(query.timestamp)),
      })
      .innerJoinAndSelect('r.amenity', 'a')
      .orderBy('"startTime"')
      .getMany();

    return res.map((el) => new GetReservationResponseDto(el));
  }
}
