
export class Educacion {
  id: number
  description:string
  title: string
  persona_id:number
  institucion: string

  constructor(id:number=0,description:string="",title:string = "" ,  persona_id:number=1, institucion:string=""){
    this.id = id
    this.description = description
    this.title = title
    this.persona_id = persona_id
    this.institucion = institucion
  }


}
