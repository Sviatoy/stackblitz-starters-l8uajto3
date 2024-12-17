import { CounterButtonComponent } from '../counter-button/counter-button.component';
import { WatchDog } from '../../directives/watch-dog/watch-dog.directive';
import { CounterService } from '../../counter.service';
import { Component } from '@angular/core';
import { WatchDogContainerComponent } from '../watch-dog-container/header.component';

@Component({
  selector: 'app-content',
  imports:[
    CounterButtonComponent,
    WatchDogContainerComponent
  ],
  template: `
    <p>Content</p>
    <app-watch-dog-container class='section'>
      <app-counter-button></app-counter-button>
      <app-counter-button></app-counter-button>
    </app-watch-dog-container>
  `,
  styles: `
    :host{
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      min-height: 50vh;

      padding: 10px;
    }
    app-watch-dog-container {
      margin: auto;
      padding: 20px;
    }
  `,
  providers: [CounterService],
  hostDirectives: [WatchDog],
})
export class ContentComponent {}
