import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListsComponent } from './lists/lists.component';
import { ListTableComponent } from './lists/list-table/list-table.component';
import { ListsService } from './list-service.service';
import { ListComponent } from './list/list.component';
import { ItemsTableComponent } from './list/items-table/items-table.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ListsComponent,
    ListTableComponent,
    ListComponent,
    ItemsTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ListsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
