import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DBzService {
    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 1500
        },
        {
            nombre: 'Vegeta',
            poder: 1500
        }
    ];

    get personjes(): Personaje[] {
        return [...this._personajes];

    }

    constructor() { }

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }


}