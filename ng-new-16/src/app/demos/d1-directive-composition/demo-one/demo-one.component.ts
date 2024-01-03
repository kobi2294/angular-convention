import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-demo-one',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './demo-one.component.html',
  styleUrls: ['./demo-one.component.scss'], 
})
export class DemoOneComponent {

}
