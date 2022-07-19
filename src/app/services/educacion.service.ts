import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../models/Educacion';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  Educacion: Educacion[] = []

  constructor(private httpClient: HttpClient) { }

  getAllEducacion(): Observable<any> {
   // this.Educacion.push(edu1)
     let data = this.httpClient.get('http://localhost:8080/api/education/all');
      console.log('data getAllEducacion:', data);
      return data;
  }
  // solo un ejemplo de los servicios que se pueden ofrecer
  removeEducacion(Educacion:Educacion):void {
    // TODO implement logic to remove a Educacion
    }
}
