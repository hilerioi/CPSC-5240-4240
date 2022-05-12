import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { ListIndexPageComponent } from './list-index-page/list-index-page.component';
import { ListDetailsPageComponent } from './list-details-page/list-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    DefaultPageComponent,
    ListIndexPageComponent,
    ListDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
