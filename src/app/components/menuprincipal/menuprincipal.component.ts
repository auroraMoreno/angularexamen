import { Component, OnInit } from '@angular/core';
import {SerieService} from './../../../services/series.service';
import {Serie} from './../../../models/serie';

@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.component.html',
  styleUrls: ['./menuprincipal.component.css'],
  providers:[SerieService]
})
export class MenuprincipalComponent implements OnInit {

  public series:Array<Serie>;

  constructor(private _service:SerieService) {
    this.series=[]
   }

  cargarSeries(){
    this._service.getSeries().subscribe(response =>{
      this.series = response;
    });
  }

  ngOnInit(): void {
    this.cargarSeries();
  }
  

}
