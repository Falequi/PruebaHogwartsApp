
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hogwarts } from '../interface/personaje.interface';


@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  baseUrl = environment.baseURL;

  constructor( private http:  HttpClient) { }

  getPersonajes( casa:String = ''):Observable<Hogwarts[]>{
    return this.http.get<Hogwarts[]>(this.baseUrl+'/house/'+casa);
  }

}
