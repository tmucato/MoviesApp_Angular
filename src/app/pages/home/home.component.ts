import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { TvShow } from '../../models/tvshow';
import { MoviesService } from '../../services/movies.service';
import { TvShowService } from '../../services/tvshows.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    leatestMovies: Movie[] = [];
    popularMovies: Movie[] = [];
    upcomingMovies: Movie[] = [];
    topRatedMovies: Movie[] = [];
    nowPlayingMovies: Movie[] = [];
    popularTvShows: TvShow[] = [];

    constructor(private moviesService: MoviesService, private tvShowService: TvShowService) { }

    ngOnInit(): void {

        this.moviesService.getMovies('popular').subscribe((movies) => {
            this.popularMovies = movies;
        })

        this.moviesService.getMovies('now_playing').subscribe((movies) => {
            this.nowPlayingMovies = movies;
        })

        this.moviesService.getMovies('top_rated').subscribe((movies) => {
            this.topRatedMovies = movies;
        })

        this.moviesService.getMovies('upcoming').subscribe((movies) => {
            this.upcomingMovies = movies;
        })

        this.tvShowService.getTvShows('popular').subscribe((tvshows) => {
            this.popularTvShows = tvshows;
        })

    }

}
