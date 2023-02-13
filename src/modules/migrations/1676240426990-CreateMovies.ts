import { MigrationInterface, QueryRunner } from 'typeorm';
import data from '../database/data.json';
import { Movies } from '../movies/movies.entity';

export class CreateMovies1676240426990 implements MigrationInterface {
  name = 'CreateMovies1676240426990';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const { data: result } = data;
    const movieList = result.map((movie) =>
      Object.fromEntries(
        Object.entries(movie).map(([key, val]) => [
          key[0].toLowerCase() + key.slice(1),
          val,
        ]),
      ),
    );

    await queryRunner.query(
      `CREATE TABLE "movies" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "year" character varying NOT NULL, "rated" character varying NOT NULL, "released" character varying NOT NULL, "runtime" character varying NOT NULL, "genre" character varying NOT NULL, "director" character varying NOT NULL, "writer" character varying NOT NULL, "actors" character varying NOT NULL, "plot" character varying NOT NULL, "language" character varying NOT NULL, "country" character varying NOT NULL, "awards" character varying NOT NULL, "poster" character varying NOT NULL, "metascore" character varying NOT NULL, "imdbRating" character varying NOT NULL, "imdbVotes" character varying NOT NULL, "imdbID" character varying NOT NULL, "type" character varying NOT NULL, "response" character varying NOT NULL, "images" text array NOT NULL, CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY ("id"))`,
    );
    await queryRunner.manager.insert(Movies, movieList);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "movies"`);
  }
}
