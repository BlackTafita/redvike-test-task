import { ClassConstructor } from 'class-transformer';
import { InitSeed } from './init.seed';
import { appDataSource } from '../../../ormconfig';
import { ISeeder } from './seeder.interface';

const seeds: ClassConstructor<ISeeder>[] = [InitSeed];

void appDataSource.initialize().then(async (dataSource) => {
  await dataSource.transaction(async (manager) => {
    for (const seed of seeds) {
      await new seed().run(manager);
    }
  });

  console.log('\n', '\x1b[32m', 'Seeded! ฅ^•ﻌ•^ฅ', '\x1b[0m');
  process.exit();
});
