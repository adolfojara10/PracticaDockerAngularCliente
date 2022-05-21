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

  constructor(private router: Router, private personaServ: PersonawsService) { }

  ngOnInit(): void {
  }

  cambiarPagina(){
    this.router.navigate(['listarPersona']);
  }

  crearPersona(){
    this.persona.id = 1;
    this.personaServ.crearPersona(this.persona).subscribe(data => {
      console.log(data);
    });
  }
}
