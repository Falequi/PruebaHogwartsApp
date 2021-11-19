import { environment } from 'src/environments/environment';
import { HttpClient }  from '@angular/common/http';
import { Injectable }  from '@angular/core';
import { Observable } from 'rxjs';
import { Hogwarts } from '../interface/personaje.interface';


@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  baseUrl = environment.baseURL;

  constructor(private http: HttpClient) { }

  getProfesores():Observable<Hogwarts[]>{
    return this.http.get<Hogwarts[]>(this.baseUrl+'/staff');
  }

}
