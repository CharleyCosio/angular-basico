import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spider', 'Hulk', 'Thor'];
  heroeBorrado: string = "";

  borrarHeroe() {
    const heroeBorrado = this.heroes.shift() || "";
    this.heroeBorrado = heroeBorrado;
  }

  //SE EJECUTA ANTES DE LA RENDERIZACION
  // constructor() {
  // }

  //ONG ININT PARA INICIALIZAR COSAS PETICIONES
  // ngOnInit(): void {
  // }

}
