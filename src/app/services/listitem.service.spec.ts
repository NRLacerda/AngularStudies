import { TestBed } from '@angular/core/testing';

import { ListitemService } from './listitem.service';

describe('ListitemService', () => {
  let service: ListitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
