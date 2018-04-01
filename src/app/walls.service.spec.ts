/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WallsService } from './walls.service';

describe('WallsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WallsService]
    });
  });

  it('should ...', inject([WallsService], (service: WallsService) => {
    expect(service).toBeTruthy();
  }));
});
