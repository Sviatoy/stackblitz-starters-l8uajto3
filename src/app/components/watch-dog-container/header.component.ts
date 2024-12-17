import { Component } from '@angular/core';

import { CounterService } from '../../counter.service';
import { WatchDog } from '../../directives/watch-dog/watch-dog.directive';

@Component({
  selector: 'app-watch-dog-container',
  template: `
    <ng-content></ng-content>
  `,
  providers: [CounterService],
  styles: `
    :host{
      display: flex;
      flex: 0 0 auto;
      flex-direction: column;

      justify-content: center;
      align-items: center;

      padding: 10px 10px 20px;
    }
  `,
  hostDirectives: [WatchDog],
})
export class WatchDogContainerComponent {}
