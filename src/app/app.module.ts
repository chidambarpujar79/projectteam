import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { PlacedisplayComponent } from './placedisplay/placedisplay.component';
import { routing } from './app.routing';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    PlacedisplayComponent
  ],
  imports: [
    BrowserModule,
    routing,
   //NgbModule,NgbPaginationModule,
   NgbPaginationModule
    NgbAlertModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
