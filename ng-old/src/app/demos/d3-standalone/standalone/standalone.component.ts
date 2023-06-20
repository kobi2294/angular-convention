import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OtherStandaloneComponent } from '../other-standalone/other-standalone.component';

@Component({
  standalone: true,
  selector: 'app-standalone',
  templateUrl: './standalone.component.html',
  imports: [CommonModule, OtherStandaloneComponent]
})
export class StandaloneComponent {}
