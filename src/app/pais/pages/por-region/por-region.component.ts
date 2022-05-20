import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.inteface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent { 
  
  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']; 
  regionActiva: string = '';
  paises: Country[] = [];

  getClaseCss(region: string): string{
    return (region === this.regionActiva)? 'btn btn-success ms-3':'btn btn-outline-success ms-3';
  }

  constructor(private paisService: PaisService) { }

  activarRegion(region: string){

    if(region === this.regionActiva) return;

    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion(region)
    .subscribe((paises:any)=>{
      this.paises = paises;
      console.log(this.paises)
    })
  }

}
