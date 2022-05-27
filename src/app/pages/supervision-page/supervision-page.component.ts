import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supervision-page',
  templateUrl: './supervision-page.component.html',
  styleUrls: ['./supervision-page.component.scss']
})
export class SupervisionPageComponent implements OnInit {

  ListAntencionClinica = [
    {
      'titulo': 'Niños',
      'img': 'niños',
      'descripcion': 'La  psicoterapia de niños se basa en la técnica y teoría psicoanalítica para comprender el conflicto emocional con sus primeros objetos de amor, así como su medio ambiente y mecanismos de defensa al servicio de su autoconservación; teniendo en cuenta la expresión psíquica por medio del juego en relación con el  psicoanalista en la transferencia , para construir un panorama emocional respecto a sus temores, fortalezas, fantasías, así como su entorno familiar y social, con el fín de mejorar la salud psíquica del niño.'
    },
  
    {
      'titulo': 'Adolescentes',
      'img': 'adolescentes',
      'descripcion': 'La adolescencia es una etapa difícil de manejar tanto para los jóvenes como para los padres de familia, ya que surgen nuevos ideales y una necesidad profunda de individualización por parte del adolescente; así mismo la falta de  límites es un factor que no permite crear un vínculo adecuado con la familia y el mundo exterior. El adolescente es capaz por sí mismo de buscar soluciones quizá no certeras ante el sufrimiento emocional. Esta población necesita apoyo para comunicar sus emociones, crear sus límites, reorganizar sus ideales y el encuentro consigo mismo, procurando su bienestar emocional.'
    },
  
    {
      'titulo': 'Pareja y familia',
      'img': 'pareja',
      'descripcion': 'Cuando el sufrimiento rebasa las capacidades psíquicas para el funcionamiento y la adaptación en la vida, es de suma importancia  comprender de donde parten las emociones negativas y dolorosas que merman la autonomía, seguridad,  en un sentido profundo la esperanza de vida expresado en los síntomas, sueños, fantasías, temores y  salud física, así como las áreas libres de conflicto en el psiquismo con las que podemos trabajar en el espacio analítico a través de la transferencia con el analista para  que el paciente  experimente  otra forma de afrontarse ante la realidad que a veces no es del todo soportable, el paciente deberá  reencontrarse.'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
