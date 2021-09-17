import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Pancho';
  genero: string = 'masculino';
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Pancho','Sofia','Dylan','Murrix','Alv','sfgfg','dfgsdfgdsf'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 cliente esperando.',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre = 'Diana';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //keyvalue pipe
  persona = {
    nombre: 'Pancho',
    edad: 23,
    direccion: 'Sonora, Mexico'
  }

  //json pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: true
    }
  ];

  //Async pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('Fin de la promesa');
    }, 3500);
  });
}
