import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { TvShowService } from 'src/app/services/tvshows.service';
import { Genre } from '../../models/genre';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

movies_genres: Genre[] = [];

tvshow_genres: Genre[] = [];

  constructor(private moviesService : MoviesService, private tvshowService : TvShowService) { }

  ngOnInit(): void {

    this.moviesService.getMoviesGenres().subscribe(moviegenresData => 
      {this.movies_genres = moviegenresData});

    this.tvshowService.getTvShowGenres().subscribe(tvshowgenresData => 
      {this.tvshow_genres = tvshowgenresData});

  }

}
