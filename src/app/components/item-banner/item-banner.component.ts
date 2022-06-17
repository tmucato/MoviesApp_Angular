import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { TvShow } from '../../models/tvshow';

@Component({
  selector: 'item-banner',
  templateUrl: './item-banner.component.html',
  styleUrls: ['./item-banner.component.scss']
})
export class ItemBannerComponent {

    @Input() items: any [] = [];
    @Input() title: string = '';

}
