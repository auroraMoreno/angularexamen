import { Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "./global";
import { Personaje } from 'src/models/personaje';


@Injectable()
export class SerieService {
    private url:string;
    constructor(private _http:HttpClient) {
        this.url=Global.ulr
    }

    getSeries():Observable<any>{
        var request="/api/Series";
        return this._http.get(this.url + request);
    }

    getPersonajes():Observable<any>{
        var request="/api/Personajes";
        return this._http.get(this.url + request);
    }

    getSerie(idSerie):Observable<any>{
        var request ="/api/Series/" + idSerie;
        return this._http.get(this.url + request);
    }

    getPersonajesSerie(idSerie):Observable<any>{
        var request ="/api/Series/PersonajesSerie/" + idSerie;
        return this._http.get(this.url + request);
    }

    insertarPersonaje(personaje:Personaje):Observable<any>{
        let json = JSON.stringify(personaje);
        let header = new HttpHeaders().set("Content-Type","application/json");
        var request ="/api/Personajes";
        return this._http.post(this.url + request, json, {headers:header});
    }

    updatePersonaje(idPersonaje, idSerie){
        //let json = JSON.stringify(personaje);
        var header = new HttpHeaders().set("Content-Type","application/json");
        var request="/api/Personajes/"+ idPersonaje +"/" + idSerie;
        return this._http.put(this.url + request,{
            headers:header
        });
    }
}
