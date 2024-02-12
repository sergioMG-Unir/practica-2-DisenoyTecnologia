import { Component,OnInit } from '@angular/core';
import { Practica2Service } from '../practica2.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent implements OnInit {
  listaNumeros =[];
  newNumero = { titulo: '', contenido: '', digito: '' };

  constructor(private practicaService: Practica2Service) {}

  ngOnInit() {
    this.getPractica();
  }

  getPractica() {
    console.log(this.listaNumeros);
    this.listaNumeros = this.practicaService.getnumeros(); 
    console.log(this.listaNumeros);
  }

  addNewNumero() {
    this.practicaService.addNumeros(this.newNumero);
    this.newNumero = { titulo: '', contenido: '', digito: '' };
    alert('¡Número añadido!');
  }

}
