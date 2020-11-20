import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DetallesComponent} from './components/detalles/detalles.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { InsertarPersonajeComponent } from './components/insertar-personaje/insertar-personaje.component';
import { UpdatePersonajeComponent } from './components/update-personaje/update-personaje.component';


const appRoutes: Routes=[
    {path:"detalles/:idSerie", component:DetallesComponent},
    {path:"personajes/:idSerie",component:PersonajesComponent},
    {path:"create", component:InsertarPersonajeComponent},
    {path:"update", component:UpdatePersonajeComponent}
]

export const appRoutingProviders : any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);