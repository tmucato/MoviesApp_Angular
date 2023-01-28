import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDto, Movie, MovieImages, MovieVideoDto, MovieCredits } from '../models/movie';
import { GenresDto } from '../models/genre';
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

    getMovieVideos(id: string) {
        return this.http.get<MovieVideoDto>(this.baseUrl + '/movie/' + id + '/videos?api_key=' + this.apiKey)
            .pipe(
                switchMap(res => {
                    return of(res.results);
                })
            );
    }

    getMoviesGenres() {
        return this.http.get<GenresDto>(this.baseUrl + '/genre/movie/list?api_key=' + this.apiKey)
            .pipe(
                switchMap(res => {
                    return of(res.genres);
                })
            );
    }

    getMoviesByGenre(genreId : string, pageNumber: number)
    {
        return this.http.get<MovieDto>(this.baseUrl + '/discover/movie?api_key=' + this.apiKey + '&with_genres=' + genreId + '&page=' + pageNumber)
        .pipe(
            switchMap(res => {
                return of(res.results);
            })
        );
    }


    getMovie(id: string) {
        return this.http.get<Movie>(this.baseUrl + '/movie/' + id + '?api_key=' + this.apiKey)
    }

    searchMovies(page: number, searchValue?: string) {
        const uri = searchValue ? '/search/movie' : '/movie/popular'
        return this.http.get<MovieDto>(this.baseUrl + uri + '?page=' + page + '&api_key=' + this.apiKey + '&query=' + searchValue)
            .pipe(
                switchMap(res => {
                    return of(res.results);
                })
            );
    }

    getMovieImages(id: string) {
        return this.http.get<MovieImages>(this.baseUrl + '/movie/' + id + '/images?api_key=' + this.apiKey)
    }

    getMovieCredits(id: string)
    {
        return this.http.get<MovieCredits>(this.baseUrl + '/movie/' + id + '/credits?api_key=' + this.apiKey)
    }

}
