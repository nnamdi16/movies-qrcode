import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesController } from './movies.controller';
import { Movies } from './movies.entity';
import { MovieService } from './movies.service';

@Module({
  imports: [TypeOrmModule.forFeature([Movies])],
  controllers: [MoviesController],
  providers: [MovieService],
  exports: [MovieService],
})
export class MoviesModule {}
