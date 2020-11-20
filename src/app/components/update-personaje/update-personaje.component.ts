import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';
import { Serie } from 'src/models/serie';
import { Personaje } from 'src/models/personaje';
import {SerieService} from './../../../services/series.service';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-update-personaje',
  templateUrl: './update-personaje.component.html',
  styleUrls: ['./update-personaje.component.css'],
  providers:[SerieService]
})
export class UpdatePersonajeComponent implements OnInit {

  public series: Array<Serie>;
  public personajes: Array<Personaje>;
  public personaje:Personaje;

  @ViewChild("selectPersonajes") selectPersonaje:ElementRef;
  @ViewChild("selectSerie") selectSeries: ElementRef;

  constructor(private _service:SerieService, private _router:Router) { 
    this.series=[];
    this.personajes=[];
  }

  buscarSeries(){
    this._service.getSeries().subscribe(response=>{
      this.series = response;
    });
  }

  buscarPersonajes(){
    this._service.getPersonajes().subscribe(response=>{
      this.personajes=response;
    })
  }

  updatePersonaje(){
    var personaje= parseInt(this.selectPersonaje.nativeElement.value);
    var serie= parseInt(this.selectSeries.nativeElement.value);
    this._service.updatePersonaje(personaje,serie).subscribe(response=>{
        this._router.navigate(["/"]);
    });
  }

  ngOnInit(): void {
    this.buscarPersonajes();
    this.buscarSeries();
  }

}
