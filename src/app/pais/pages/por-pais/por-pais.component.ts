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
  paisesSugeridos: Country[] = [];

  mostrarSugerencias: boolean = false;

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

  sugerencias(termino:string){
    this.hayError=false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.bucarPais(termino)
      .subscribe((paises:any) => {
        this.paisesSugeridos = paises.splice(0,5);
      }, (err)=>this.paisesSugeridos=[])
  }
  
  buscarSugerido(termino: string){
    this.buscar(termino);
    this.mostrarSugerencias = false;
  }
}
