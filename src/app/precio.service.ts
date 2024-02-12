import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class PrecioService {

  constructor(private http:HttpClient,  private config:ConfigService){}  

  getPrices(){
    const headers = new HttpHeaders();
    headers.append("Content-type", "application/json");
    return this.http.get('https://reqres.in/api/unknown',{headers});
  }

}
