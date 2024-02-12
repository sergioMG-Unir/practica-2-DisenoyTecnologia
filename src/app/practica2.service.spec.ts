import { TestBed } from '@angular/core/testing';

import { Practica2Service } from './practica2.service';

describe('Practica2Service', () => {
  let service: Practica2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Practica2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
