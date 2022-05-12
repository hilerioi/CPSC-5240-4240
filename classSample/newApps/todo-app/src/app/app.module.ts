import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ListIndexPageComponent } from './list-index-page/list-index-page.component';
import { ListIntroPageComponent } from './list-intro-page/list-intro-page.component';
import { ListDetailesPageComponent } from './list-detailes-page/list-detailes-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    ListIndexPageComponent,
    ListIntroPageComponent,
    ListDetailesPageComponent
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
