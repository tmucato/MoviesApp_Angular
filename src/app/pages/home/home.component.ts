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

        this.moviesService.getMovies('popular').subscribe((response) => {
            this.popularMovies = response.results;
        })

        this.moviesService.getMovies('now_playing').subscribe((response) => {
            this.nowPlayingMovies = response.results;
        })

        this.moviesService.getMovies('top_rated').subscribe((response) => {
            this.topRatedMovies = response.results;
        })

        this.moviesService.getMovies('upcoming').subscribe((response) => {
            this.upcomingMovies = response.results;
        })

        this.tvShowService.getTvShows('popular').subscribe((response: any) => {
            this.popularTvShows = response.results;
        })

    }

}
