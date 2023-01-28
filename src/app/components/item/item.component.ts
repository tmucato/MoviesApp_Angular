import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { TvShow } from '../../models/tvshow';
import { IMAGES_SIZES } from '../../constants/images-sizes'

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export default class ItemComponent implements OnInit {

    @Input() itemData: any | null = null;

    imagesSazes = IMAGES_SIZES;

  constructor() { }

  ngOnInit(): void {

  }

  

}
