import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AppComponent } from './app.component';
import { ListIntroPageComponent } from './list-intro-page/list-intro-page.component';
import { ListIndexPageComponent } from './list-index-page/list-index-page.component';
import { ListDetailesPageComponent } from './list-detailes-page/list-detailes-page.component';

const routes: Routes = [
  { path: 'welcome', component:  WelcomePageComponent},
  { path: '', component:  WelcomePageComponent},
  { path: 'intro', component: ListIntroPageComponent},
  { path: 'listindex', component: ListIndexPageComponent},
  { path: 'listdetails/:id', component: ListDetailesPageComponent},
//  { path: '', redirectTo: '/welcome', pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
