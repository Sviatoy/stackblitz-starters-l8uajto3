import { CounterService } from '../../counter.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  imports: [],
  template: `
    <button (click)="increment()">
      Clicked {{count()}} times
    </button>

  `,
  styles: `
    button{
      margin: 3px;
    }
  `
})
export class CounterButtonComponent {
  private counterService = inject(CounterService);

  count = this.counterService.count;

  increment() {
    this.counterService.increment();
  };

}
