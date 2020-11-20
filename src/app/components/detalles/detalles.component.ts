import { Component, OnInit } from '@angular/core';
import {SerieService} from './../../../services/series.service';
import { ActivatedRoute, Params } from "@angular/router";
import {Serie} from './../../../models/serie';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
  providers:[SerieService]
})
export class DetallesComponent implements OnInit {

  public serie: Serie;

  constructor(private _service:SerieService, private _activeRoute: ActivatedRoute) { }

  buscarSerie(idSerie){
    this._service.getSerie(idSerie).subscribe(response=>{
      this.serie=response;
    });
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params:Params)=>{
      var idSerie = params.idSerie;
      this.buscarSerie(idSerie);
    });
  }

}
