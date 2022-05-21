import { Component } from '@angular/core';
import { personaS } from 'src/app/domain/persona';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { PersonawsService } from './services/personaws.service';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { CrearPersonaComponent } from './pages/crear-persona/crear-persona.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'PracticaDockerCliente';

  persona: personaS = new personaS();

  constructor(private router: Router, private personaServ: PersonawsService) { }

  //crear: CrearPersonaComponent = new CrearPersonaComponent(this.router,this.personaServ);

  cambiarPagina(){
    this.router.navigate(['listarPersona']);
  }

  
  crearPersona(){
    this.personaServ.crearPersona(this.persona).subscribe(data => {
      console.log(data);
    });
  }
}
