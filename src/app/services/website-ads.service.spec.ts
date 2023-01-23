import { TestBed } from '@angular/core/testing';

import { WebsiteAdsService } from './website-ads.service';

describe('WebsiteAdsService', () => {
  let service: WebsiteAdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsiteAdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
