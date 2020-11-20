import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { SerieComponent } from './components/serie/serie.component';
import { MenuprincipalComponent } from './components/menuprincipal/menuprincipal.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { InsertarPersonajeComponent } from './components/insertar-personaje/insertar-personaje.component';
import { UpdatePersonajeComponent } from './components/update-personaje/update-personaje.component';

@NgModule({
  declarations: [
    AppComponent,
    SerieComponent,
    MenuprincipalComponent,
    DetallesComponent,
    PersonajesComponent,
    InsertarPersonajeComponent,
    UpdatePersonajeComponent
  ],
  imports: [
    BrowserModule, routing, FormsModule, HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
