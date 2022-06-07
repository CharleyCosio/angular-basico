import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  //personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: 'Mtro Rochi',
    poder: 100
  }

  // get personajes(): Personaje[] {
  //   return this.dbService.personajes;
  // }

  // agregarNuevoPer(argumento: Personaje) {
  //   this.personajes.push(argumento);
  // }

  //constructor(private dbService: DBzService) {
  //this.personajes = this.dbService.personajes;
  // }
  // cambiarNombre(event: any) {
  //   console.log(event.target.value)
  // }
}
