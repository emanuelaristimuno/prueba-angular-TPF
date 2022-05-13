import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/Experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  experiences: Experience[] = []

  constructor(private experienceService:ExperienceService) { }


  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.experiences= this.experienceService.getAllExperiencias()
  }

  borrarExperienceDeLista(experienceParaBorrar: Experience) {
    // con este truco borramos a la Experience pero en realidad deberíamos
    // llamar al service
    this.experiences = this.experiences.filter(e => e.codigo !== experienceParaBorrar.codigo)
    }
}
