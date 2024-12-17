import { Component } from '@angular/core';

import { CounterService } from '../../counter.service';
import { WatchDog } from '../../directives/watch-dog/watch-dog.directive';

@Component({
  selector: 'app-side-nav',
  template: `
    <p>SideNav</p>
    <ng-content></ng-content>
  `,
  providers: [CounterService],
  styles: `
    :host{
      display: flex;
      flex: 0 0 200px;
      flex-direction: column;

      justify-content: flex-start;
      align-items: center;

      padding: 10px;
    }
  `,
  hostDirectives: [WatchDog],
})
export class SideNavComponent {}
