import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearPersonaComponent } from './pages/crear-persona/crear-persona.component';
import { ListarPersonaComponent } from './pages/listar-persona/listar-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearPersonaComponent,
    ListarPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
