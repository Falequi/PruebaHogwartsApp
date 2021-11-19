import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hogwarts } from '../interface/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  baseUrl = environment.baseURL;
  nuevosEstudiantes: Hogwarts[]=[];

  constructor( private http: HttpClient) { }

  getEstudiantes():Observable<Hogwarts[]>{
    return this.http.get<Hogwarts[]>(this.baseUrl+'/students');
  }

  guardarEstudiante( prospecto:Hogwarts ){
    this.nuevosEstudiantes.push(prospecto);
    
  }

  getNuevosEstudiante(){
    return this.nuevosEstudiantes;
  }
}
