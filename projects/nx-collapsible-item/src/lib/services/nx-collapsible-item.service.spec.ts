import { TestBed } from '@angular/core/testing';

import { NxCollapsibleItemService } from './nx-collapsible-item.service';

describe('NxCollapsibleItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NxCollapsibleItemService = TestBed.get(
      NxCollapsibleItemService
    );
    expect(service).toBeTruthy();
  });
});
