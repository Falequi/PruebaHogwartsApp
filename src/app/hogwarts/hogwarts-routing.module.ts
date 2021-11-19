import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { HomeComponent } from './pages/home/home.component';
import { FormEstudianteComponent } from './pages/form-estudiante/form-estudiante.component';
import { NuevosEstudiantesComponent } from './pages/nuevos-estudiantes/nuevos-estudiantes.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    children: [
      {
        path: 'estudiantes',
        component: EstudiantesComponent
      },
      {
        path: 'personajes',
        component: PersonajesComponent
      },
      {
        path: 'profesores',
        component: ProfesoresComponent
      },
      {
        path: 'formestudiante',
        component: FormEstudianteComponent
      },
      {
        path: 'nuevosestudiantes',
        component: NuevosEstudiantesComponent
      },
      {
        path: '**',
        redirectTo: ''
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HogwartsRoutingModule { }
