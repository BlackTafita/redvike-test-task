import { Amenity } from './amenity.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryColumn()
  id: number;

  @ManyToOne(() => Amenity, (amenity) => amenity.reservations)
  amenity: Amenity;

  @Column({ nullable: false })
  userId: number;

  @Column({ nullable: false })
  startTime: number;

  @Column({ nullable: false })
  endTime: number;

  @Column({ nullable: false })
  date: Date;
}
