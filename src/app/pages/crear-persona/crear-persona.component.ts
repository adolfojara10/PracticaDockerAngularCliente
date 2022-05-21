import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { personaS } from 'src/app/domain/persona';
import { PersonawsService } from 'src/app/services/personaws.service';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.scss']
})
export class CrearPersonaComponent implements OnInit {

  persona: personaS = new personaS();
  listaObras:any;

  constructor(private router: Router, private personaServ: PersonawsService) { }

  ngOnInit(): void {
    this.listaObras = this.personaServ.getPersonas();
  }

  cambiarPagina(){
    this.router.navigate(['listarPersona']);
  }

  crearPersona(){
    this.persona.id = this.generarID();
    this.personaServ.crearPersona(this.persona).subscribe(data => {
      console.log(data);
    });
  }

  generarID(){
    return this.listaObras.length + 1;
  }
}
