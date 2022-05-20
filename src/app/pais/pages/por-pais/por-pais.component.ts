import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.inteface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{
  termino:string ="";
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService){

  }

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.bucarPais(this.termino)
    .subscribe( (res:any) => {
      console.log(res);
      this.paises = res;
      // console.log(this.paises);
    }, (err)=>{
      this.hayError = true;
      this.paises= [];
    });
  }
}
