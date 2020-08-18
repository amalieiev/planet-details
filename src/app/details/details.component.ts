import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsService } from './details.service';
import { Planet } from '../common/models/planet';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public details$: Observable<Planet>;

  constructor(private detailsService: DetailsService) { }

  ngOnInit(): void {
    this.details$ = this.detailsService.details$;
  }

}
