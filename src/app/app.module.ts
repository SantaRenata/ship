/*
* File: app.module.ts
* Author: Sánta Renáta Diána
* Copyright: 2023, Sánta Renáta Diána
* Group: Szoft II N
* Date: 2023-04-18
* Github: https://github.com/SantaRenata/
* Licenc: GNU GPL
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShipComponent } from './ship/ship.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShipComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
