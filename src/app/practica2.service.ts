import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Practica2Service {

  numeros = [
    {
      "titulo":"Uno",
      "contenido":"Soy el numero uno",
      "digito":"1"
  },
  {   
      "titulo":"Dos",
      "contenido":"Soy el numero dos",
      "digito":"2"
  },
  {
    "titulo":"Tres",
    "contenido":"Soy el numero tres",
    "digito":"3"
  }
  ]

  getnumeros(){
    console.log(this.numeros)
    return this.numeros;
  }

  addNumeros(newNumero) {
    this.numeros.push(newNumero);
  }

  constructor() { }
}
