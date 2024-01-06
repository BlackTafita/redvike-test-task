import { Reservation } from './reservation.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Amenity {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  name: string;

  @OneToMany(() => Reservation, (reservation) => reservation.amenity)
  reservations: Reservation[];
}
