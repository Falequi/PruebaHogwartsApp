import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from '../../services/estudiantes.service';
import { Hogwarts } from '../../interface/personaje.interface';

@Component({
  selector: 'app-nuevos-estudiantes',
  templateUrl: './nuevos-estudiantes.component.html',
  styles: [
  ]
})
export class NuevosEstudiantesComponent implements OnInit {

  listaEstudiantes!:Hogwarts[];

  constructor( private estudiantesService: EstudiantesService) { }

  ngOnInit(): void {
    this.listaEstudiantes = this.estudiantesService.getNuevosEstudiante();
  }

}
