import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hogwarts } from '../../interface/personaje.interface';
import { EstudiantesService } from '../../services/estudiantes.service';

@Component({
  selector: 'app-form-estudiante',
  templateUrl: './form-estudiante.component.html',
  styles: [`
  .container{
    display:flex;
    align-items:center;
    justify-content:center
  }
    
  `]
})
export class FormEstudianteComponent implements OnInit {

  patronus = [
   "boar",
   "doe",
   "goat",
   "hare",
   "horse",
   "Jack Russell terrier",
   "lynx",
   "otter",
   "persian cat",
   "stag",
   "swan",
   "tabby cat",
   "weasel",
   "wolf"
  ];

  nuevoEstudiante!:Hogwarts;

  user_name_error:      string = '';
  name_error_required : string = 'El nombre es requerido';

  user_patronus_error:      string = '';
  patronus_error_required : string = 'El patronus es requerido';

  user_yearOfBirth_error:      string = '';
  yearOfBirth_error_required : string = 'El año es requerido';

  errorSave:        boolean=false;
  mesageErrorSave:  string = 'Complete los siguientes Campos: ';


  formNuevosEstudiantes: FormGroup = this.fb.group({
    name:       ['',Validators.required],
    patronus:   ['',Validators.required],
    yearOfBirth:['',Validators.required],
    image:      ['']
  });

  
  constructor(  private fb: FormBuilder,
                private estudiantesService: EstudiantesService) { }
  
  ngOnInit(): void {
    this.clear();
  }
  
  guardar(){
    if(this.formNuevosEstudiantes.status === 'INVALID') {

      if(this.formNuevosEstudiantes.value.name === '')
        this.mesageErrorSave = this.mesageErrorSave+'Nombre ';

      if(this.formNuevosEstudiantes.value.patronus === '')
        this.mesageErrorSave = this.mesageErrorSave+'Patronus ';

      if(this.formNuevosEstudiantes.value.yearOfBirth === '')
        this.mesageErrorSave = this.mesageErrorSave+'Año ';

      this.errorSave  =  true;
      return;
    }
    this.nuevoEstudiante = this.formNuevosEstudiantes.value;
    this.estudiantesService.guardarEstudiante(this.nuevoEstudiante);
    this.clear();
    this.errorSave  =  false;
    return;
  }

  isValid(data:string){

    if(this.formNuevosEstudiantes.controls[data].errors 
      && this.formNuevosEstudiantes.controls[data].touched){
      switch (data) {

        case 'name':
            this.user_name_error = this.name_error_required;
        return true;

        case 'patronus':
            this.user_patronus_error = this.patronus_error_required;
        return true;

        case 'yearOfBirth':
            this.user_yearOfBirth_error = this.yearOfBirth_error_required;
        return true;
      };
    }
    return false;
  }

  clear(){
    this.formNuevosEstudiantes.reset({
      name: '',
      patronus: '',
      yearOfBirth: '',
      image: ''
    });
  }
}
