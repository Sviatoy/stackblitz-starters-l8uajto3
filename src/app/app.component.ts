import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterButtonComponent } from './components/counter-button/counter-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { WatchDog } from './directives/watch-dog/watch-dog.directive';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    ContentComponent,
    WatchDog,
    CounterButtonComponent,
    FooterComponent,
    SideNavComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'counter-app';
}
