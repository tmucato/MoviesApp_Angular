import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TvShowsDto, TvShow, TvShowVideoDto, TvShowImages, TvShowCredits } from '../models/tvshow';
import { GenresDto } from '../models/genre';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs'

@Injectable({ providedIn: 'root' })

export class TvShowService {

    baseUrl: string = 'https://api.themoviedb.org/3';
    apiKey: string = '0ee1a987a1a1b09c560406deb918141f';

    constructor(private http: HttpClient) { }

    getTvShows(type: string = 'popular', count: number = 12) 
    {
        return this.http.get<TvShowsDto>(this.baseUrl + '/tv/' + type + '?api_key=' + this.apiKey)
            .pipe(
                switchMap(res => {
                    return of(res.results.slice(0, count));
                })
            );
    }

    getTvShow(id: string) {
        return this.http.get<TvShow>(this.baseUrl + '/tv/' + id + '?api_key=' + this.apiKey)
    }


    getTvShowVideos(id: string)
    {
        return this.http.get<TvShowVideoDto>(this.baseUrl + '/tv/' + id + '/videos?api_key=' + this.apiKey)
        .pipe(
            switchMap(res => {
                return of(res.results);
            })
        );
    }

    getTvShowImages(id: string)
    {
        return this.http.get<TvShowImages>(this.baseUrl + '/tv/' + id + '/images?api_key=' + this.apiKey)
    }

    getTvShowCredits(id: string)
    {
        return this.http.get<TvShowCredits>(this.baseUrl + '/tv/' + id + '/credits?api_key=' + this.apiKey)
    }

    searchTvShows(page: number, searchValue?: string) 
    {
        const uri = searchValue ? '/search/tv' : '/tv/popular'
        return this.http.get<TvShowsDto>(this.baseUrl + uri + '?page=' + page + '&api_key=' + this.apiKey + '&query=' + searchValue)
            .pipe(
                switchMap(res => {
                    return of(res.results);
                })
            );
    }

    getTvShowsByGenre(genreId : string, pageNumber: number)
    {
        return this.http.get<TvShowsDto>(this.baseUrl + '/discover/tv?api_key=' + this.apiKey + '&with_genres=' + genreId + '&page=' + pageNumber)
        .pipe(
            switchMap(res => {
                return of(res.results);
            })
        );       
    }

    getTvShowGenres() {
        return this.http.get<GenresDto>(this.baseUrl + '/genre/tv/list?api_key=' + this.apiKey)
            .pipe(
                switchMap(res => {
                    return of(res.genres);
                })
            );
    }



}
