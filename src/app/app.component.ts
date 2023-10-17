import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ERROR_ITEMS } from '../../projects/errors/src/lib/config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: '<router-outlet/>',
})
export class AppComponent {

  constructor(@Inject(ERROR_ITEMS) test: []) {
    console.log('test', test);
  }

}
