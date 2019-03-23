import { Component, OnInit } from '@angular/core';
import { PersonajesService } from './../../personajes.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {


Personajes: any[] = [];

  constructor(private _servicio: PersonajesService) { 
    this.Personajes = _servicio.obtenerPersonaje();

  }

  ngOnInit() {
  }

}
