import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [ // Declarations é onde será listado todos os components, pipes e diretivas
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  imports: [ // imports é onde será importado outros modulos
    BrowserModule,
    CursosModule
  ],
  providers: [], // Onde ficará os serviços declarados nesse modulo (serviços de verificação de login seria uma exemplo)
  bootstrap: [AppComponent] // É o component instanciado inicialmente (o container)
})
export class AppModule { } // Declaração da Classe de Acordo com o ECMAScript e o Nome seguindo os padrões do Style Guide do Angular
