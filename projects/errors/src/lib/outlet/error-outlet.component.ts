import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ErrorLayoutComponent } from '../layout/error-layout.component';

@Component({
  selector: 'error-outlet',
  template: `
      <error-layout>
          <router-outlet/>
      </error-layout>`,
  standalone: true,
  imports: [
    RouterOutlet,
    ErrorLayoutComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorOutletComponent {
}
