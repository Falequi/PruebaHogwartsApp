import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { HomeComponent }           from './pages/home/home.component';
 
import { FlexLayoutModule }        from '@angular/flex-layout';
import { HogwartsRoutingModule }   from './hogwarts-routing.module';
import { MaterialModule }          from '../material/material.module';
 
import { PersonajesComponent }     from './pages/personajes/personajes.component';
import { EstudiantesComponent }    from './pages/estudiantes/estudiantes.component';
import { ProfesoresComponent }     from './pages/profesores/profesores.component';
import { ListadoComponent }        from './components/listado/listado.component';
import { ReactiveFormsModule }     from '@angular/forms';
import { FormEstudianteComponent } from './pages/form-estudiante/form-estudiante.component';
import { NuevosEstudiantesComponent } from './pages/nuevos-estudiantes/nuevos-estudiantes.component';
import { ImagenPipe } from './pipes/imagen.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    PersonajesComponent,
    EstudiantesComponent,
    ProfesoresComponent,
    ListadoComponent,
    FormEstudianteComponent,
    NuevosEstudiantesComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HogwartsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class HogwartsModule { }
