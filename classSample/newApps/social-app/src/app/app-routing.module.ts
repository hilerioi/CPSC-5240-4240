import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent} from './welcome-page/welcome-page.component';
import {DefaultPageComponent} from './default-page/default-page.component';
import {ListDetailsPageComponent} from './list-details-page/list-details-page.component';
import {ListIndexPageComponent} from './list-index-page/list-index-page.component'; 

const routes: Routes = [
  {path: 'index', component: ListIndexPageComponent}, 
  {path: 'details/:id', component: ListDetailsPageComponent},   
  {path: 'intro', component: WelcomePageComponent}, 
  {path: 'default', component: DefaultPageComponent}, 
  {path: '', component: DefaultPageComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
