import { TestBed, async } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Router, UrlTree } from '@angular/router';
import { StorageService } from '../../services/storage.service';

describe('AuthService', () => {
  let storageServiceMock: any;
  let routerMock: any;
  let service: AuthService;
  let storageData: {email: string};

  const urlTree: UrlTree = {} as UrlTree;

  beforeEach(async(() => {
    routerMock = {
      navigate: () => Promise.resolve(urlTree)
    };
    storageServiceMock = {
      setItem: (prop, item) => storageData[prop] = item,
      getItem: item => storageData[item],
      removeItem: item => storageData[item] = null
    };
    storageData = {
      email: 'test@email.com'
    };

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        {provide: Router, useValue: routerMock},
        {provide: StorageService, useValue: storageServiceMock},
      ]
    });

    service = TestBed.inject(AuthService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('singIn should put email into storage', () => {
    service.singIn('foo@bar');
    expect(storageData.email).toBe('foo@bar');
  });

  it('singIn should remove email from storage', () => {
    expect(storageData.email).toBe('test@email.com');
    service.signOut();
    expect(storageData.email).toBeNull();
  });
});
