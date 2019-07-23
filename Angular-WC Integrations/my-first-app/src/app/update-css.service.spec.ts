import { TestBed } from '@angular/core/testing';

import { UpdateCssService } from './update-css.service';

describe('UpdateCssService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateCssService = TestBed.get(UpdateCssService);
    expect(service).toBeTruthy();
  });
});
