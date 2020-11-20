import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import {SerieService} from './../../../services/series.service';
import {Personaje} from './../../../models/personaje';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
  providers:[SerieService]
})
export class PersonajesComponent implements OnInit {

  public personajes: Array<Personaje>;

  constructor(private _service:SerieService, private _activeRoute:ActivatedRoute) { 
    this.personajes=[]
  }

  buscarPersonajes(idSerie){
    console.log(idSerie);
    this._service.getPersonajesSerie(idSerie).subscribe(response=>{
      this.personajes=response;
    });
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params:Params)=>{
      this.buscarPersonajes(params.idSerie);
    });
  }

}
