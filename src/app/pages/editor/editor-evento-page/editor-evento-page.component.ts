import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-evento-page',
  templateUrl: './editor-evento-page.component.html',
  styleUrls: ['./editor-evento-page.component.scss']
})
export class EditorEventoPageComponent implements OnInit {

  mostrarEditor:boolean = false;

  listEventos = [
    1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1
  ]

  constructor() { }

  ngOnInit(): void {
  }

  abrirEditor(){
    this.mostrarEditor=true;
  }

}
