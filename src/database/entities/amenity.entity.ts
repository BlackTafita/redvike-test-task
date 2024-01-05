import { Reservation } from './reservation.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Amenity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: true })
  name: string;

  @OneToMany(() => Reservation, (reservation) => reservation.amenity)
  reservations: Reservation[];
}
