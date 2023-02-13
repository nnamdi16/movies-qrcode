import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movies } from './movies.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movies)
    private readonly movieRepository: Repository<Movies>,
  ) {}

  async fetchMovies() {
    return await this.movieRepository
      .createQueryBuilder('movies')
      .select()
      .orderBy('RANDOM()')
      .take(10)
      .getMany();
  }
}
