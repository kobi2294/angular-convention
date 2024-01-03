import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deferred',
  standalone: true,
  imports: [],
  templateUrl: './deferred.component.html',
  styleUrl: './deferred.component.scss'
})
export class DeferredComponent {
  @Input({required: true})
  caption!: string;

  constructor() {
    console.log('Deferred component created', this.caption);    
  }

}
