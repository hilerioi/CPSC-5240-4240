import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnicianListComponent } from './technician-list/technician-list.component';
import { WelcomeComponent} from './welcome/welcome.component';
import { RatingPublishedComponent} from './rating-published/rating-published.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'technician', component: TechnicianListComponent },
  { path: 'rating-published', component: RatingPublishedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
