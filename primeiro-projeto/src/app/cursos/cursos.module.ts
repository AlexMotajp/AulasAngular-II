import { CursosService } from './cursos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],

  exports: [ // são os componenetes que estão ligados a esse modulo, que você quer que outros modulos também tenham acesso.
    CursosComponent
  ],

  providers: [CursosService]
})
export class CursosModule { }
