import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience } from '../models/Experience';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  experiencias: Experience[] = []

  constructor(private httpClient: HttpClient) { }

  getAllExperiencias(): Observable<any> {
   // let exper1 = new Experience("Futbolista", "Patronato", 1, 36 )
   // this.experiencias.push(exper1)
   // this.experiencias.push(new Experience("Developer", "Securita", 2 ,24))
   // this.experiencias.push(new Experience("Docente", "Argentina Programa 2022", 3,8 ))
     return  this.httpClient.get('./assets/data/data.json');
     // console.log('data getAllExperiencias:', data);
      //return data;
  }
  // solo un ejemplo de los servicios que se pueden ofrecer
  removeExperience(experience:Experience):void {
    // TODO implement logic to remove a Experience
    }
}
