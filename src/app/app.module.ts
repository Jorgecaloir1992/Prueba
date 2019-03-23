import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Servicios

import {PersonajesService} from './personajes.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ListapokemonComponent } from './Navbar/listapokemon/listapokemon.component';
import { PresentacionComponent } from './Navbar/presentacion/presentacion.component';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { PersonajesComponent } from './Navbar/personajes/personajes.component';
import { HistoriaComponent } from './Navbar/historia/historia.component';
import { from } from 'rxjs';




const routes: Routes = [
  { path: 'Historia', component: HistoriaComponent },
  { path: 'Personajes', component: PersonajesComponent },
  { path: '',component: NavbarComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];




@NgModule({
  declarations: [
    AppComponent,
    
    
    ListapokemonComponent,
    
    PresentacionComponent,
    
    NavbarComponent,
    
    PersonajesComponent,
    
    HistoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [
    PersonajesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
