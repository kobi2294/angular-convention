import { CommonModule } from "@angular/common";
import { NgModule, Type } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatRippleModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatRadioModule } from "@angular/material/radio";
import { RouterModule } from "@angular/router";

const sharable: Type<any>[] = [
    MatIconModule, 
    MatButtonModule, 
    MatDialogModule, 
    MatCardModule, 
    MatRippleModule, 
    MatRadioModule,
    CommonModule, 
    RouterModule, 
    ReactiveFormsModule
]

@NgModule({
    imports: [...sharable], 
    exports: [...sharable]
})
export class SharedModule {

}