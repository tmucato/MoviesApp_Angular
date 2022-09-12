import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDto } from '../models/movie';
import { Movie } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs'


@Injectable({ providedIn: 'root' })

export class MoviesService {

    baseUrl: string = 'https://api.themoviedb.org/3';
    apiKey: string = '0ee1a987a1a1b09c560406deb918141f';


    constructor(private http: HttpClient) { }

    getMovies(type: string = 'popular', count: number = 12) {
        return this.http.get<MovieDto>(this.baseUrl + '/movie/' + type + '?api_key=' + this.apiKey)
            .pipe(
                switchMap(res => {
                    return of(res.results.slice(0, count));
                })
            );
    }

    getMovie(id: string) {
        return this.http.get<Movie>(this.baseUrl + '/movie/' + id + '?api_key=' + this.apiKey)
    }

    searchMovies(page: number) {
        return this.http.get<MovieDto>(this.baseUrl + '/movie/popular?page=' + page + '&api_key=' + this.apiKey)
            .pipe(
                switchMap(res => {
                    return of(res.results);
                })
            );
    }

}
