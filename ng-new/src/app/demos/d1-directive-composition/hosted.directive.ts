import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: '[appHosted]',
  standalone: true
})
export class HostedDirective {
  @Input()
  hostedInput: string = '';

  @Output()
  onHostedEvent = new EventEmitter<number>();

  constructor() { }

}
