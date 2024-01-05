import { Amenity } from './amenity.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'amenity_id' })
  amenityId: number;

  @ManyToOne(() => Amenity, (amenity) => amenity.reservations)
  amenity: Amenity;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'start_time' })
  startTime: number;

  @Column({ name: 'end_time' })
  endTime: number;

  @Column({ type: 'timestamp' })
  date: Date;
}
