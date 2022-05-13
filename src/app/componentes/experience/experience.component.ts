import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Experience } from 'src/app/models/Experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  @Input() experience: Experience = new Experience()
  @Output() deleteExperience:EventEmitter<Experience> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  aumentarAntiguedad(expe:Experience){
    expe.aumentarTiempoTrabajado()
  }
  borrarExperiencia(experienceParaBorrar:Experience) {
    this.deleteExperience.emit(experienceParaBorrar)
  }


}
