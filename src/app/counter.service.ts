import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'any',
})
export class CounterService {
  count = signal(0);

  increment() {
    this.count.update((count: number) => count + 1);
  }
}
