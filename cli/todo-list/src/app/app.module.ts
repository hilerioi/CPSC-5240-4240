import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListsComponent } from './lists/lists.component';
import { ListTableComponent } from './lists/list-table/list-table.component';
import { ListsService } from './list-service.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ListsComponent,
    ListTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ListsService ],
  bootstrap: [ListsComponent]
})
export class AppModule { }
