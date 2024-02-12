import { Component, OnInit } from '@angular/core';
import { Practica2Service } from '../practica2.service';

@Component({
  selector: 'app-compo-practica',
  templateUrl: './compo-practica.component.html',
  styleUrl: './compo-practica.component.css',
})
export class CompoPracticaComponent {

  listaNumeros =[];

  constructor(private practicaService: Practica2Service) {}

  getPractica() {
    console.log(this.listaNumeros);
    this.listaNumeros = this.practicaService.getnumeros(); 
    console.log(this.listaNumeros);
  }
}