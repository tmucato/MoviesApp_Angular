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
      this.getTvShow(id);
      this.getTvShowVideos(id);
      this.getTvShowImages(id);
      this.getTvShowCredits(id);
    });
  }


  getTvShow(id: string)
  {
    this.tvshowService.getTvShow(id).subscribe((tvshowData) => {
      this.tvshow = tvshowData;
  });
  }

  getTvShowVideos(id: string)
  {
    this.tvshowService.getTvShowVideos(id).subscribe((tvshowVideoData) => {
      this.tvshowVideos = tvshowVideoData
  });
  }

  getTvShowImages(id: string)
  {
    this.tvshowService.getTvShowImages(id).subscribe((tvshowImagesData) => {
      this.tvshowImages = tvshowImagesData
  });
  }
  getTvShowCredits(id: string)
  {
    this.tvshowService.getTvShowCredits(id).subscribe((tvshowCreditsData) => {
      this.tvshowCredits = tvshowCreditsData
  });
  }
}