import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public email$: Observable<string>;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.email$ = this.authService.email$;
  }

  public handleSignOut(): void {
    this.authService.signOut();
  }
}
