import { Component, OnInit } from '@angular/core';
import { TvShow } from '../../models/tvshow';
import { TvShowService } from '../../services/tvshows.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';


@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {


  tvshows: TvShow[] = [];
  genreId: string | null = null;
  searchValue : string | null = null;

  constructor(private tvshowsService: TvShowService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({genreId}) =>{
      if (genreId) 
      {
          this.genreId = genreId;
          this.getTvShowsByGenre(genreId, 1);
      }
      else
      {
      this.getPagedTvShows(1);
      }
    })
  }


  getPagedTvShows(page:number, searchKeyword?: string)
  {
      this.tvshowsService.searchTvShows(page,searchKeyword).subscribe((tvshows) => {
          this.tvshows = tvshows;
      });
  }

  getTvShowsByGenre(genreId: string, page: number)
  {
      this.tvshowsService.getTvShowsByGenre(genreId, page).subscribe((tvshows) => {
          this.tvshows = tvshows;
      });
  }


  tvsearchChanged()
  {
    if (this.searchValue) {
      this.getPagedTvShows(1, this.searchValue);
  }
  }

  paginate(event: any) 
  {
    const pageNumber = event.page +1;
    if (this.genreId)
        {
            this.getTvShowsByGenre(this.genreId, pageNumber );
        }
        else{
            if (this.searchValue) {
                this.getPagedTvShows(pageNumber, this.searchValue);
            }
            else{
                this.getPagedTvShows(pageNumber);
            }
        }

  }

}
