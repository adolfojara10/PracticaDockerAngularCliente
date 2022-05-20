import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { personaS } from 'src/app/domain/persona';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.scss']
})
export class CrearPersonaComponent implements OnInit {

  persona: personaS = new personaS();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cambiarPagina(){
    this.router.navigate(['listarPersona']);
  }

  crearPersona(){
    
  }

}
