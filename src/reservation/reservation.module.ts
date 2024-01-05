import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Amenity, Reservation } from 'src/common/db/entities';
import { ReservationController } from 'src/reservation/reservation.controller';
import { ReservationRepository } from 'src/reservation/reservation.repository';
import { ReservationService } from 'src/reservation/reservation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Amenity, Reservation])],
  controllers: [ReservationController],
  providers: [ReservationService, ReservationRepository],
})
export class ReservationModule {}
