import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {SerieService} from './../../../services/series.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Serie } from 'src/models/serie';
import { Personaje } from 'src/models/personaje';

@Component({
  selector: 'app-insertar-personaje',
  templateUrl: './insertar-personaje.component.html',
  styleUrls: ['./insertar-personaje.component.css'],
  providers:[SerieService]
})
export class InsertarPersonajeComponent implements OnInit {

  @ViewChild("cajanumero") cajanumero:ElementRef;
  @ViewChild("cajanombre") cajanombre:ElementRef;
  @ViewChild("cajaimagen") cajaimagen:ElementRef;
  @ViewChild("selectSerie") selectSerie: ElementRef;

  public series:Array<Serie>
  public msn: String;

  constructor(private _service:SerieService, private _router:Router) {
    this.series=[];
    this.msn="";
   }

  buscarSeries(){
    this._service.getSeries().subscribe(response=>{
      this.series = response;
    });
  }

  insertarPersonaje(){
    var num = parseInt(this.cajanumero.nativeElement.value);
    var nom = this.cajanombre.nativeElement.value;
    var img = this.cajaimagen.nativeElement.value;
    var selectSerie = parseInt(this.selectSerie.nativeElement.value);
    var personaje = new Personaje(num,nom,img,selectSerie);
    console.log(personaje);
    this._service.insertarPersonaje(personaje).subscribe(response=>{
      console.log(response);
    }, error=>{
      console.log(error);
    });
  }

  ngOnInit(): void {
    this.buscarSeries();
  }

}
