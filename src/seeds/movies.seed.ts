import { Movies } from "../../src/movies/entity/movies.entity";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import data from "../../database/data.json";

export default class CreateMovies implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        console.log(data)
      await connection
        .createQueryBuilder()
        .insert()
        .into(Movies)
        .values(data)
        .execute()
    }
  }