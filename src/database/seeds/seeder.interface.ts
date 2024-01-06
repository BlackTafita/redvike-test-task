import { EntityManager } from 'typeorm';

export interface ISeeder {
  run(manager: EntityManager): Promise<void>;
}
