import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ErrorDTO } from '../model/error.model';

@Component({
  selector: 'error-page',
  templateUrl: './error.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorPageComponent {

  @Input({ required: true })
  public error!: ErrorDTO;

}
