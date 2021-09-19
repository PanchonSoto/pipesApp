import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(value: Heroes[]): Heroes[] {

    value = value.sort((a,b)=>(a.nombre > b.nombre) ? 1: -1);
    return value;
    
  }

}
