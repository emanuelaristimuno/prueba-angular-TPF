import { Injectable } from '@angular/core';
import { Experience } from '../models/Experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  experiencias: Experience[] = []

  constructor() { }

  getAllExperiencias(): Experience[] {
    let exper1 = new Experience(1,"Futbolista", "Patronato",  36 )
    this.experiencias.push(exper1)
    this.experiencias.push(new Experience(4,"Developer", "Securita",24))
    this.experiencias.push(new Experience(6,"Docente", "Argentina Programa 2022",8 ))
  return this.experiencias
  }
  // solo un ejemplo de los servicios que se pueden ofrecer
  removeExperience(experience:Experience):void {
    // TODO implement logic to remove a Experience
    }
}
