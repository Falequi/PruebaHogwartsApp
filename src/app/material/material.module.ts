import { NgModule } from '@angular/core';

import { MatButtonModule }         from '@angular/material/button';
import { MatCardModule }           from '@angular/material/card';
import { MatDatepickerModule }     from '@angular/material/datepicker';
import { MatDividerModule }        from '@angular/material/divider';
import { MatFormFieldModule }      from '@angular/material/form-field';
import { MatGridListModule }       from '@angular/material/grid-list';
import { MatIconModule }           from '@angular/material/icon';
import { MatListModule }           from '@angular/material/list';
import { MatSelectModule }         from '@angular/material/select';
import { MatSidenavModule }        from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDividerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
