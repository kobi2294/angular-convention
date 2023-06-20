import { NgModule } from "@angular/core";
import { StandaloneComponent } from "./standalone/standalone.component";
import { OtherStandaloneComponent } from "./other-standalone/other-standalone.component";

@NgModule({
    imports: [
        StandaloneComponent, 
        OtherStandaloneComponent
    ]
})
export class SomeModule {}

