import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService implements Storage {

  private storage: Storage;

  constructor() {
    // This is the place where we can perform logic to choose appropriate Storage
    // (f.e. localStorage will not be available for SSR)
    this.storage = globalThis.localStorage;
  }

  get length(): number {
    return this.storage.length;
  }

  clear(): void {
    this.storage.clear();
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  key(index: number): string | null {
    return this.storage.key(index);
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    this.storage.setItem(key, value);
  }
}
