import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { TvShowService } from '../../services/tvshows.service';
import { TvShow, TvShowCredits, TvShowImages, TvShowVideo } from '../../models/tvshow';
import { first } from 'rxjs';


@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvshowComponent implements OnInit {

    tvshow: TvShow | null = null
    tvshowVideos: TvShowVideo[] = [];
    tvshowImages: TvShowImages | null = null;
    tvshowCredits: TvShowCredits | null = null;
    imagesSizes = IMAGES_SIZES;

  constructor(private route: ActivatedRoute, private tvshowService: TvShowService) { }

  ngOnInit(): void {

    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
    });
  }


  getMovie(id: string)
  {
    this.tvshowService.getTvShow(id).subscribe((tvshowData) => {
      this.tvshow = tvshowData;
  });
  }

  getMovieVideos(id: string)
  {
    this.tvshowService.getTvShowVideos(id).subscribe((tvshowVideoData) => {
      this.tvshowVideos = tvshowVideoData
  });
  }

  getMovieImages(id: string)
  {
    this.tvshowService.getTvShowImages(id).subscribe((tvshowImagesData) => {
      this.tvshowImages = tvshowImagesData
  });
  }
  getMovieCredits(id: string)
  {
    this.tvshowService.getTvShowCredits(id).subscribe((tvshowCreditsData) => {
      this.tvshowCredits = tvshowCreditsData
  });
  }
}