import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SalonSpaceService } from './salon-space.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
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
    RatingPublishedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SalonSpaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
