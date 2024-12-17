import {
  Directive,
  contentChildren,
  computed,
  effect,
  inject,
} from '@angular/core';
import { CounterButtonComponent } from '../../components/counter-button/counter-button.component';
import { CounterService } from '../../counter.service';
import { COUNTER_LIMIT } from '../../constants';

/**
 * Watches the counter buttons and sets a class on the host element
 * if any of the counters reach the limit.
 */

@Directive({
  selector: '[app-watch-dog]',
  host: {
    '[style.background-color]': 'isActive() ? "red" : "white"',
  },
  providers: [CounterService],
})
export class WatchDog {
  buttons = contentChildren(CounterButtonComponent);
  values = computed(() => this.buttons().map((button) => button.count()));
  isActive = computed(() =>
    this.values().some((value) => value >= COUNTER_LIMIT)
  );

}
