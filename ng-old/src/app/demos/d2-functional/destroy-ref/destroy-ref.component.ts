import { Component, DestroyRef, inject } from '@angular/core';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-destroy-ref',
  templateUrl: './destroy-ref.component.html',
  styleUrls: ['./destroy-ref.component.scss']
})
export class DestroyRefComponent {
  constructor(private destroyRef: DestroyRef) {
    destroyRef.onDestroy(() => console.log('Destroyed'));

    interval().pipe(
      takeUntilDestroyed()
    ).subscribe(val => console.log(val));
  }

  notInjectionContext() {
    interval().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(val => console.log(val))
  }

}
