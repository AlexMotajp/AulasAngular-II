import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  url: String = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'https://picsum.photos/400/200/?random';
  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }
  constructor() { }

  ngOnInit() {
  }

}
