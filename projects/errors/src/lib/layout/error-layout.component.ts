import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'error-layout',
  templateUrl: 'error-layout.component.html',
  styleUrls: ['error-layout.component.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatToolbarModule,
    RouterLink,
  ]
})
export class ErrorLayoutComponent {

}
