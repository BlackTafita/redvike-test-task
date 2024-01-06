import { Injectable } from '@nestjs/common';
import { GetReservationDto } from 'src/reservation/dto/get-reservation.dto';
import { ReservationRepository } from 'src/reservation/reservation.repository';
import { DataSource } from 'typeorm';
import { Reservation } from '../database/entities';
import { GetReservationResponseDto } from './response/get-reservation.response.dto';
import { ReservationByUserResponseDto } from './response/reservation-by-user.response.dto';

@Injectable()
export class ReservationService {
  constructor(
    private reservationRepository: ReservationRepository,
    private dataSource: DataSource,
  ) {}

  async getReservationsByAmenityId(
    query: GetReservationDto,
  ): Promise<GetReservationResponseDto[]> {
    const res = await this.reservationRepository.find({
      where: {
        amenity: {
          id: Number(query.amenityId),
        },
        date: new Date(Number(query.timestamp)),
      },
      relations: ['amenity'],
      order: {
        startTime: 'ASC',
      },
    });

    return res.map((el) => new GetReservationResponseDto(el));
  }

  async getReservationsByUserId(userId: string): Promise<any> {
    const res = await this.dataSource.manager
      .createQueryBuilder()
      .from(Reservation, 'r')
      .select(
        `r.date, json_agg(json_build_object(
          'id', r.id,
          'startTime', r."startTime",
          'endTime', r."endTime",
          'date', r."date",
          'userId', r."userId",
          'amenity', a
      )) as reservations`,
      )
      .innerJoin('amenity', 'a', 'r."amenityId" = a.id')
      .where('r.userId = :userId', { userId: Number(userId) })
      .groupBy('r.date')
      .getRawMany();

    return res.map((el) => new ReservationByUserResponseDto(el));
  }
}
