import { Component } from '@angular/core';
import { LoremComponent } from "../lorem/lorem.component";
import { DeferredComponent } from "../deferred/deferred.component";

@Component({
    selector: 'app-defer-demo',
    standalone: true,
    templateUrl: './defer-demo.component.html',
    styleUrl: './defer-demo.component.scss',
    imports: [LoremComponent, DeferredComponent]
})
export class DeferDemoComponent {

}
