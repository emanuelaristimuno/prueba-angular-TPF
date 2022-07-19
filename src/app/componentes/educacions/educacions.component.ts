import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/Educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educacions',
  templateUrl: './educacions.component.html',
  styleUrls: ['./educacions.component.css']
})
export class EducacionsComponent implements OnInit {

  educacions:Educacion[] = []

  constructor(private educacionService:EducacionService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.educacionService.getAllEducacion().subscribe(data=>{
      console.log('mostrando data de EducacionsComponents', data);
//      luego asignamos a expeciencies para mostrar
      this.educacions= data;
      console.log('this.educacions',this.educacions)
    })
  }


}
