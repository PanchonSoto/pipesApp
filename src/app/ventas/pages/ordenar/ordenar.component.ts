import { Component } from '@angular/core';

import { Heroes, Color } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent{

  enMayusculas: boolean = true;

  ordernarPor: string = '';
  heroes: Heroes[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ]

  cambiar(){
    /* this.enMayusculas? this.enMayusculas=false : this.enMayusculas = true; */
    this.enMayusculas = !this.enMayusculas;
  }
 
  cambiarOrden(valor:string){
    console.log(valor);
    this.ordernarPor = valor;
  }

}
