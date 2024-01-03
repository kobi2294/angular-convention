import { Routes } from '@angular/router';
import { HomeComponent } from './00-home/home/home.component';
import { DeferDemoComponent } from './01-defer/defer-demo/defer-demo.component';

export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch: 'full'}, 
    {path:'home', component: HomeComponent}, 
    {path:'defer', component: DeferDemoComponent}
];
