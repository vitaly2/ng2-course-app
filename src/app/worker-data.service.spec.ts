/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WorkerDataService } from './worker-data.service';

describe('Service: WorkerData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkerDataService]
    });
  });

  it('should ...', inject([WorkerDataService], (service: WorkerDataService) => {
    expect(service).toBeTruthy();
  }));
});
