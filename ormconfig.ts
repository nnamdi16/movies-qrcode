import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
const typeOrmModuleOptions = (configService:ConfigService): TypeOrmModuleOptions => ({
  name: 'assessment',
  type: 'postgres',
  url: configService.get("POSTGRES_DB_URL"),
  database: configService.get('POSTGRES_DB'),
  logging: true,
  ssl: { rejectUnauthorized: false },
  entities: [__dirname + '/../*/.entity{.ts,.js}'],
  synchronize: true,
  migrationsTableName: 'migration',
  migrations: ['src/modules/migration/*.ts'],
  migrationsRun: true,


})

export const OrmConfig = (configService:ConfigService)=>({
  ...typeOrmModuleOptions(configService),
  migrationsTableName: "migrations",
  migrations: ["src/migrations/*.ts"],
  seeds: ['src/seeds/*/{.ts,.js}'],
  factories: ['src/modules/factories/*/{.ts,.js}'],
  cli: {
    "migrationsDir": "src/migrations"
  }
});

module.exports = {
  type: 'postgres',
  seeds: ['src/seeds/**/*{.ts,.js}'],
  factories: ['src/factories/**/*{.ts,.js}'],
}