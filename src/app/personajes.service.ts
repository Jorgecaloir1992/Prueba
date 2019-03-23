import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
   
  Personajes:any[] = [{

    Nombre: 'Brock (タケシ Takeshi en japonés)',
    Especialidad: 'Es un criador Pokémon, y un verdadero experto cocinero que siempre maravilla a los demás con sus platos... Actualmente está estudiando para ser un doctor Pokémon en Johto.' ,
    Detalles: 'era el líder de gimnasio de Ciudad Plateada. Ahora está a cargo del gimnasio su hermano, Forrest. Su padre, y sus numerosos hermanos también se encuentran en Ciudad Plateada.',
  },
  {

    Nombre: 'Ash Ketchum (サトシ Satoshi en japonés',
    Especialidad: 'Es un Entrenador Pokémon. ',
    Detalles: 'Es el protagonista del anime de Pokémon, su objetivo de reunir las medallas de gimnasio necesarias para participar en una Liga Pokémon y ganarla, y así estar un paso más cerca de convertirse en un maestro Pokémon',
  },

  {

    Nombre: 'Misty (カスミ Kasumi en japonés)',
    Especialidad: 'Actualmente es la líder del Gimnasio Celeste',
    Detalles: 'Una entrenadora de Pokémon de tipo agua.',
 
  },



]


  constructor() { 
    console.log ('Funcionando servicio')
  }

  obtenerPersonaje(){
    return this.Personajes
      
    }

}
