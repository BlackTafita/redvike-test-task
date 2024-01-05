import 'dotenv/config';

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';

export const getConfig = function (): TypeOrmModuleOptions & DataSourceOptions {
  return {
    type: 'postgres',
    host: process.env.DB_HOST || '127.0.0.1',
    port: +process.env.DB_PORT || 5432,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'mysql',
    database: process.env.DB_DATABASE || 'test',
    entities: ['src/**/*.entity{.ts,.js}'],
    migrations: ['src/database/migrations/*{.ts,.js}'],
    logger: 'advanced-console',
  };
};

const config = getConfig();

export const appDataSource = new DataSource(config);

export default config;
