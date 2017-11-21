import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { Game } from "./providers/game";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
      Game
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
