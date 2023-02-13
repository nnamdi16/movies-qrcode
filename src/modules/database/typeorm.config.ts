import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { CreateMovies1676240426990 } from '../migrations/1676240426990-CreateMovies';
import { Movies } from '../movies/movies.entity';
// import { CreateMovies1676232978490 } from "./src/migrations/migrations/1676232978490-CreateMovies";

config();

const configService = new ConfigService();
console.log(configService.get('POSTGRES_DB_URL'));

export default new DataSource({
  type: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  // port: configService.get('POSTGRES_PORT'),
  // url: configService.get('POSTGRES_DB_URL'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DB'),
  entities: [Movies],
  migrations: [CreateMovies1676240426990],
});
