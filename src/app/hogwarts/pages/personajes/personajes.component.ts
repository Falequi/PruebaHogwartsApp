import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonajesService } from '../../services/personajes.service';
import { Hogwarts } from '../../interface/personaje.interface';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styles: [`
    mat-form-field{
      margin: 8px 20px;
      background: #424242;
    }
    mat-label{
      padding: 5px;
    }
  `]
})
export class PersonajesComponent implements OnInit {

  House = [
    "Gryffindor",
    "Hufflepuff",
    "Ravenclaw",
    "Slytherin"
  ];

  casaSeleccionada:Hogwarts[] = [];

  formPersonajes: FormGroup = this.fb.group({
    casa:['Gryffindor',Validators.required]
  });



  constructor( private fb: FormBuilder,
               private personajeSevice: PersonajesService          
    ){
  }

  ngOnInit(): void{
    this.filtro('Gryffindor');
  }
  
  filtro(casa:String){
    this.personajeSevice.getPersonajes(casa)
      .subscribe( casa => this.casaSeleccionada =  casa);
  }

}
