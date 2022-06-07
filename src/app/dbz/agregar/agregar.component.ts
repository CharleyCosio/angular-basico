import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DBzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  ///INPUT PARA EVIAR DATOS DEL PADRE-HIJO Y OUTPUT PARA EL CONTRARIO HIJO-PADRE
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzService: DBzService) { }

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) { return; }

    this.dbzService.agregarPersonaje(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = { nombre: '', poder: 0 };
  }

}
