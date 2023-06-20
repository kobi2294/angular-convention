import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-other-standalone',
  templateUrl: './other-standalone.component.html',
  styleUrls: ['./other-standalone.component.scss'], 
  standalone: true
})
export class OtherStandaloneComponent {
  @Input({alias: 'message', required: true})
  txtMessage!: string;
}
