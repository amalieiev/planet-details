import { TestBed, async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { DetailsService } from './details.service';
import { Planet } from '../../models/planet';
import { ActivatedRoute } from '@angular/router';
import { planetsMock } from '../../../mocks/palanets.mock';

describe('DetailsService', () => {
  let httpClientMock: any;
  let activatedRouteMock: any;
  let service: DetailsService;

  const details: Planet = planetsMock[0];

  beforeEach(async(() => {
    httpClientMock = {
      get: () => of(details)
    };
    activatedRouteMock = {
      params: of({
        planetName: 'planetName'
      })
    };

    TestBed.configureTestingModule({
      providers: [
        DetailsService,
        {provide: HttpClient, useValue: httpClientMock},
        {provide: ActivatedRoute, useValue: activatedRouteMock},
      ]
    });

    service = TestBed.inject(DetailsService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have property details$: Observable<Planet>', (done: DoneFn) => {
    service.details$.subscribe(data => {
      expect(data).toEqual(details);
      done();
    });
  });
});
