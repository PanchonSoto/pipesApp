import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'pancho';
  nombreUpper: string = 'PANCHO';
  nombreCompleto: string = 'pAnCHo SOto'

  fecha: Date = new Date();

}
