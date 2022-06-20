import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TvShowsDto } from '../models/tvshow';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs'

@Injectable({ providedIn: 'root' })

export class TvShowService {

    baseUrl: string = 'https://api.themoviedb.org/3';
    apiKey: string = '0ee1a987a1a1b09c560406deb918141f';

    constructor(private http: HttpClient) { }

    getTvShows(type: string = 'popular', count: number = 12) {
        return this.http.get<TvShowsDto>(this.baseUrl + '/tv/' + type + '?api_key=' + this.apiKey)
            .pipe(
                switchMap(res => {
                    return of(res.results.slice(0, count));
                })
            );
    }
}
