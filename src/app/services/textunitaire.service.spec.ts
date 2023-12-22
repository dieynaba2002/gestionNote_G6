import { TestBed } from '@angular/core/testing';

import { TextunitaireService } from './textunitaire.service';

describe('TextunitaireService', () => {
  let service: TextunitaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextunitaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
