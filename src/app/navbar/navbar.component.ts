import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { PrecioService } from "../precio.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  constructor(private service: PrecioService){};

ngOnInit():void {
 /* this.service.getPrices().subscribe((datito) => {
    const {data} = datito
    console.log(data);
    
  }); */
}

}
