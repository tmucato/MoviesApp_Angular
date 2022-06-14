import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class TvShowService {

    baseUrl: string = 'https://api.themoviedb.org/3';
    apiKey: string = '0ee1a987a1a1b09c560406deb918141f';

    constructor(private http: HttpClient) { }

    getTvShows(type: string = 'popular') {
        return this.http.get(this.baseUrl + '/tv/' + type + '?api_key=' + this.apiKey)
    }
}
