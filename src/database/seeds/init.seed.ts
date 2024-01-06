import * as moment from 'moment';
import * as fs from 'node:fs/promises';
import { Amenity } from '../entities/amenity.entity';
import { Reservation } from '../entities/reservation.entity';
import { EntityManager } from 'typeorm';
import { ISeeder } from './seeder.interface';
import { parseCsvString } from '../../common/utils/parse-csv-string';

export class InitSeed implements ISeeder {
  public async run(manager: EntityManager): Promise<void> {
    const amenityFile = await fs.readFile(
      './src/database/seeds/amenity.csv',
      'utf-8',
    );
    const amenityParsedRows = await parseCsvString(amenityFile);

    await manager
      .createQueryBuilder()
      .insert()
      .into(Amenity)
      .values(
        amenityParsedRows.map((el) => ({
          id: Number(el.id),
          name: el.name,
        })),
      )
      .execute();

    const reservationFile = await fs.readFile(
      './src/database/seeds/reservations.csv',
      'utf-8',
    );
    const reservationParsedRows = await parseCsvString(reservationFile);
    console.log(reservationParsedRows);
    await manager
      .createQueryBuilder()
      .insert()
      .into(Reservation)
      .values(
        reservationParsedRows.map((el) => ({
          id: Number(el.id),
          amenity: {
            id: Number(el.amenity_id),
          },
          userId: Number(el.user_id),
          startTime: Number(el.start_time),
          endTime: Number(el.end_time),
          date: moment(Number(el.date)).toDate(),
        })),
      )
      .execute();
  }
}
