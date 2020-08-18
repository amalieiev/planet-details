import { Component, OnInit } from '@angular/core';
import { PlanetsService } from './planets.service';
import { Observable } from 'rxjs';
import { Planet } from '../common/models/planet';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  public planets$: Observable<Planet[]>;

  constructor(private planetsService: PlanetsService) { }

  ngOnInit(): void {
    this.planets$ = this.planetsService.planets$;
  }

}
