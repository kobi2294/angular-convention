import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class SomeService {
    title = 'I am some service';
    doSomething() {
        console.log('Doing something');
    }
}