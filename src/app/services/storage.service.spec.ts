import { TestBed, async } from '@angular/core/testing';
import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        StorageService
      ]
    });

    globalThis.localStorage.clear();

    service = TestBed.inject(StorageService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('addItem should save item into storage', () => {
    expect(globalThis.localStorage.getItem('email')).toBeNull();
    service.setItem('email', 'me@email.com');
    expect(globalThis.localStorage.getItem('email')).toBe('me@email.com');
  });

  it('removeItem should remove item from storage', () => {
    service.setItem('email', 'me@email.com');
    expect(globalThis.localStorage.getItem('email')).toBe('me@email.com');
    service.removeItem('email');
    expect(globalThis.localStorage.getItem('email')).toBeNull();
  });
});
