import { Injectable } from '@nestjs/common';
import { Reservation } from 'src/database/entities';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ReservationRepository extends Repository<Reservation> {
  constructor(private dataSource: DataSource) {
    super(Reservation, dataSource.createEntityManager());
  }
}
