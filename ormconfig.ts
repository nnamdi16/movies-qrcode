import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { config } from "dotenv";

config();

const configService = new ConfigService();
const typeOrmModuleOptions: TypeOrmModuleOptions = {
  name: 'assessment',
  type: 'postgres',
  url: configService.get('POSTGRES_DB_URL'),
  database: configService.get('POSTGRES_DB'),
  logging: true,
  // ssl: { rejectUnauthorized: false },
  entities: [__dirname + '/../*/.entity{.ts,.js}'],
  synchronize: true,
  migrationsTableName: 'migration',
  migrations: ['src/modules/migration/*.ts'],
  migrationsRun: true,
};

export const OrmConfig = {
  ...typeOrmModuleOptions,
  migrationsTableName: 'migrations',
  migrations: ['src/migrations/*.ts'],
  // seeds: ['src/seeds/*/{.ts,.js}'],
  factories: ['src/modules/factories/*/{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};