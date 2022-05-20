import { TestBed } from '@angular/core/testing';

import { PersonawsService } from './personaws.service';

describe('PersonawsService', () => {
  let service: PersonawsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonawsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
