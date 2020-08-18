import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Planet } from '../common/models/planet';



@Injectable()
export class DetailsService {

  public details$: Observable<Planet>;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.details$ = this.route.params.pipe(
      switchMap(params =>
        this.http.get(`http://private-anon-5b2bae4500-starhub.apiary-mock.com/api/planets/${params.planetName}`) as Observable<Planet>)
    );
  }
}
