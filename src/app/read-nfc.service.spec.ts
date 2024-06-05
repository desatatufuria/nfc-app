import { TestBed } from '@angular/core/testing';

import { ReadNfcService } from './read-nfc.service';

describe('ReadNfcService', () => {
  let service: ReadNfcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadNfcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
