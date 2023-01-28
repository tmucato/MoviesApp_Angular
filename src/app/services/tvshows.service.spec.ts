import { TestBed } from '@angular/core/testing';

import { TvShow.ServiceService } from './tv-show.service.service';

describe('TvShow.ServiceService', () => {
  let service: TvShow.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvShow.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
