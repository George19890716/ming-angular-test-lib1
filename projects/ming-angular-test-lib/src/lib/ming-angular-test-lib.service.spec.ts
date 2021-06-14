import { TestBed } from '@angular/core/testing';

import { MingAngularTestLibService } from './ming-angular-test-lib.service';

describe('MingAngularTestLibService', () => {
  let service: MingAngularTestLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MingAngularTestLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
