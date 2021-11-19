import { Component, OnInit } from '@angular/core';
import { Hogwarts } from '../../interface/personaje.interface';
import { EstudiantesService } from '../../services/estudiantes.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styles: [
  ]
})
export class EstudiantesComponent implements OnInit {

  estudiantes!: Hogwarts[];

  constructor( private estudianesService: EstudiantesService) { }

  ngOnInit(): void {
    this.estudianesService.getEstudiantes()
      .subscribe( estudiantes => this.estudiantes = estudiantes);
  }

}
