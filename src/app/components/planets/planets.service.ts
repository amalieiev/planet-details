import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Planet } from '../../models/planet';


@Injectable()
export class PlanetsService {

  public planets$: Observable<Planet[]>;

  constructor(private httpService: HttpClient) {
    this.planets$ = (httpService.get('http://private-anon-5b2bae4500-starhub.apiary-mock.com/api/planets') as Observable<Planet[]>);
  }
}
