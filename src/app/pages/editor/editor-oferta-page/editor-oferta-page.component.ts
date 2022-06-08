import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-oferta-page',
  templateUrl: './editor-oferta-page.component.html',
  styleUrls: ['./editor-oferta-page.component.scss']
})
export class EditorOfertaPageComponent implements OnInit {

  listOfertas = [
    1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
