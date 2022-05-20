import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonawsService } from 'src/app/services/personaws.service';



@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrls: ['./listar-persona.component.scss']
})
export class ListarPersonaComponent implements OnInit {

  
  listaPersonas: any;


  constructor(private router: Router, private personaServ:PersonawsService) { }

  ngOnInit(): void {
    this.cargarPersonas();
  }

  cargarPersonas(){
    this.listaPersonas = this.personaServ.getPersonas();
  }

  crearPersona(){
    this.router.navigate(['crearPersona']);
  }

}
