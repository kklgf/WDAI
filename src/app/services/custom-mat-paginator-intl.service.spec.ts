import { TestBed } from '@angular/core/testing';

import { CustomMatPaginatorIntlService } from './custom-mat-paginator-intl.service';

describe('CustomMatPaginatorIntlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomMatPaginatorIntlService = TestBed.get(CustomMatPaginatorIntlService);
    expect(service).toBeTruthy();
  });
});
