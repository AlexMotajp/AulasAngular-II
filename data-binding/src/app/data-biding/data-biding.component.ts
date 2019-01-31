import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  url: String = 'http://loiane.com';
  cursoAngular: Boolean = true;
  urlImagem = 'https://picsum.photos/400/200/?random';
  isMouseOver: Boolean = false;

  valorAtual: String = '';
  valorSalvo: any;

  nomeDoCurso: String = 'Angular 2';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('botaoClicado');
  }

  onKeyUp(evento) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit() {
  }

}
