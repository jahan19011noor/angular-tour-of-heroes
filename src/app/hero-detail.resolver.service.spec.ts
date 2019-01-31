import { TestBed } from '@angular/core/testing';

import { HeroDetail.ResolverService } from './hero-detail.resolver.service';

describe('HeroDetail.ResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroDetail.ResolverService = TestBed.get(HeroDetail.ResolverService);
    expect(service).toBeTruthy();
  });
});
