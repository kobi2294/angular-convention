import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InjectDemoComponent } from './demos/d1-injector/inject-demo/inject-demo.component';
import { DestroyRefComponent } from './demos/d2-functional/destroy-ref/destroy-ref.component';

@NgModule({
  declarations: [
    AppComponent,
    InjectDemoComponent,
    DestroyRefComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

