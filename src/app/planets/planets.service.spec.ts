import { TestBed, async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { PlanetsService } from './planets.service';
import { planetsMock as planets } from '../../mocks/palanets.mock';

describe('PlanetsService', () => {
  let httpClientMock: any;
  let service: PlanetsService;

  beforeEach(async(() => {
    httpClientMock = {
      get: () => of(planets)
    };

    TestBed.configureTestingModule({
      providers: [
        PlanetsService,
        {provide: HttpClient, useValue: httpClientMock}
      ]
    });

    service = TestBed.inject(PlanetsService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have property planets$: Observable<Planet[]>', (done: DoneFn) => {
    service.planets$.subscribe(data => {
      expect(data).toEqual(planets);
      done();
    });
  });
});
