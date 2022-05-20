import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPersonaComponent } from './pages/crear-persona/crear-persona.component';
import { ListarPersonaComponent } from './pages/listar-persona/listar-persona.component';

const routes: Routes = [
  {path: 'crearPersona', component: CrearPersonaComponent},
  {path: 'listarPersona', component: ListarPersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
