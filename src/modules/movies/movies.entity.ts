import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'movies', synchronize: true })
export class Movies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  year: string;

  @Column()
  rated: string;
  @Column()
  released: string;

  @Column()
  runtime: string;

  @Column()
  genre: string;

  @Column()
  director: string;

  @Column()
  writer: string;

  @Column()
  actors: string;

  @Column()
  plot: string;

  @Column()
  language: string;

  @Column()
  country: string;
  @Column()
  awards: string;

  @Column()
  poster: string;

  @Column()
  metascore: string;

  @Column()
  imdbRating: string;

  @Column()
  imdbVotes: string;
  @Column()
  imdbID: string;

  @Column()
  type: string;

  @Column()
  response: string;
  @Column('text', { array: true })
  images: string[];
}
