import { Directive } from '@angular/core';
import { HostedDirective } from './hosted.directive';

@Directive({
  selector: '[appMy]',
  standalone: true,
  hostDirectives: [{
      directive: HostedDirective, 
      inputs: ['hostedInput: myInput'],
      outputs:['onHostedEvent: myEvent']
    }]
})
export class MyDirective {}
