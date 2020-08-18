import { TestBed, async } from '@angular/core/testing';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Router, UrlTree } from '@angular/router';

describe('AuthGuard', () => {
  let authServiceMock: any;
  let routerMock: any;
  let service: AuthGuard;

  const urlTree: UrlTree = {} as UrlTree;

  beforeEach(async(() => {
    authServiceMock = {
      email$: new BehaviorSubject('test@email.com')
    };
    routerMock = {
      navigate: () => Promise.resolve(urlTree)
    };

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        {provide: AuthService, useValue: authServiceMock},
        {provide: Router, useValue: routerMock},
      ]
    });

    service = TestBed.inject(AuthGuard);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return Observable of true if email is presented in auth service', (done: DoneFn) => {
    (service.canActivate({} as any, {} as any) as Observable<boolean | UrlTree>).subscribe(value => {
      expect(value).toBe(true);
      done();
    });
  });

  it('should return urlTree redirect if email is not present in auth service', (done: DoneFn) => {
    authServiceMock.email$.next('');

    (service.canActivate({} as any, {} as any) as Observable<boolean | UrlTree>).subscribe(value => {
      expect(value).toBe(urlTree);
      done();
    });
  });
});
