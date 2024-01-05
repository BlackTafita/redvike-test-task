import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'amenity_id' })
  amenityId: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'start_time' })
  startTime: number;

  @Column({ name: 'end_time' })
  endTime: number;

  @Column()
  date: number;
}
