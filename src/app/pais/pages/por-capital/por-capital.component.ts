import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.inteface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
    `li {cursor: pointer}`
  ]
})
export class PorCapitalComponent {

  termino:string ="";
  hayError: boolean = false;
  paises: Country[] = [];
 
  constructor(private paisService: PaisService){

  }

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarCapital(this.termino)
    .subscribe( (res:any) => {
      console.log(res);
      this.paises = res;
      // console.log(this.paises);
    }, (err)=>{
      this.hayError = true;
      this.paises= [];
    });
  }

  sugerencias(termino:string){
    this.hayError=false;
  }
}
