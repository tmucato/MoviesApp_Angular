import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie'

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

    movies: Movie[] = [];

    constructor(private moviesService: MoviesService) { }

    ngOnInit(): void {
        
        this.moviesService.searchMovies(5).subscribe((movies) => {
            this.movies = movies;
        })

    }

}
