import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentListComponent } from './Navbar/component-list/component-list.component';

import { ListapokemonComponent } from './Navbar/listapokemon/listapokemon.component';
import { PresentacionComponent } from './Navbar/presentacion/presentacion.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentListComponent,
    
    ListapokemonComponent,
    
    PresentacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
