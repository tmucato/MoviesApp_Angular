import { Genre } from "./genre";

export interface TvShow {

    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    name: string;
    origin_country: string;
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    number_of_episodes: number;
    number_of_seasons: number; 
    genres: Genre[]; 
  }

export interface TvShowsDto 
{
    page: number;
    results: TvShow[];
    total_results: number;
    total_pages: number;
}

export interface TvShowVideoDto
{
    id:number;
    results: TvShowVideo[];
}

export interface TvShowVideo
{
    site: string;
    key: string;
}
export interface TvShowImages
{
  backdrops: { file_path: string; }[]
}

export interface TvShowCredits
{
    cast:
    {
        name: string;
        profile_path: string;
    }[]
}
