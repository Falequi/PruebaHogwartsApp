import { Component, OnInit } from '@angular/core';

import { ProfesoresService } from '../../services/profesores.service';
import { Hogwarts } from '../../interface/personaje.interface';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styles: [
  ]
})
export class ProfesoresComponent implements OnInit {

  profesores!: Hogwarts[];

  constructor(private profesoresService: ProfesoresService) { }

  ngOnInit(): void {
    this.profesoresService.getProfesores()
    .subscribe( profesores  => this.profesores = profesores);
    
  }

}
