import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AufgabeEinsComponent} from './components/aufgabe-eins/aufgabe-eins.component';
import {AufgabeZweiComponent} from './components/aufgabe-zwei/aufgabe-zwei.component';
import {AufgabeDreiComponent} from './components/aufgabe-drei/aufgabe-drei.component';
import {AufgabeVierComponent} from './components/aufgabe-vier/aufgabe-vier.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AufgabeEinsComponent,
    AufgabeZweiComponent,
    AufgabeDreiComponent,
    AufgabeVierComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
