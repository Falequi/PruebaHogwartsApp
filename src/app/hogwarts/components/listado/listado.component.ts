import { Component, Input, OnInit } from '@angular/core';
import { Hogwarts } from '../../interface/personaje.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
  mat-card{
    margin-top:1rem;
  }
  `]
})
export class ListadoComponent implements OnInit {

  @Input() personajes!: Hogwarts[];

  constructor() { }

  ngOnInit(): void {
  }

}
