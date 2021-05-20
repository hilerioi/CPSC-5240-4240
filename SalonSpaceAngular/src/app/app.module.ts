import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TechnicianListComponent } from './technician-list/technician-list.component';
import { TechnicianDetailsComponent } from './technician-details/technician-details.component';
import { RatingPublishedComponent } from './rating-published/rating-published.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TechnicianListComponent,
    TechnicianDetailsComponent,
    RatingPublishedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
