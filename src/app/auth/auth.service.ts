import { Injectable } from '@angular/core';
import { StorageService } from '../common/services/storage.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Using this email property as prof that user is signed in.
  public email$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(
    private storage: StorageService,
    private router: Router
  ) {
    const email = this.storage.getItem('email');
    this.email$.next(email);
  }

  public singIn(email: string): void {
    try {
      this.storage.setItem('email', email);
      this.email$.next(email);

      this.router.navigate(['/']);
    } catch (e) {
      console.error(e);
    }
  }

  public signOut(): void {
    try {
      this.storage.removeItem('email');
      this.email$.next('');

      this.router.navigate(['auth']);
    } catch (e) {
      console.error(e);
    }
  }
}
