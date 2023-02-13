import { Controller, Get, HttpStatus, Res, Response } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response as Responses } from 'express';
import { MovieService } from './movies.service';

@Controller('movies')
@ApiTags('movies')
export class MoviesController {
  constructor(private readonly moviesService: MovieService) {}
  @Get()
  async fetchMovies(@Response() res: Responses) {
    const response = await this.moviesService.fetchMovies();
    return res.json(response).status(HttpStatus.OK);
  }
}
