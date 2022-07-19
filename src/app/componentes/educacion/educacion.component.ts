import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/Educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  @Input() educacion: Educacion = new Educacion()

  constructor() { }

  ngOnInit(): void {
  }

}
