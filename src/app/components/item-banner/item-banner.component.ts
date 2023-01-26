import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-banner',
  templateUrl: './item-banner.component.html',
  styleUrls: ['./item-banner.component.scss']
})
export class ItemBannerComponent {

    @Input() items: any [] = [];
    @Input() title: string = '';

}
