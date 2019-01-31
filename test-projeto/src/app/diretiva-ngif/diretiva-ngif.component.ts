import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: String[] = ['angular 2'];

  mostrarCursos: Boolean = false;

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }


  constructor() { }

  ngOnInit() {
  }

}
