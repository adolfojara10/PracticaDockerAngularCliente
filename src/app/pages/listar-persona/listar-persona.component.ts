import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {OrderListModule} from 'primeng/orderlist';

@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrls: ['./listar-persona.component.scss']
})
export class ListarPersonaComponent implements OnInit {

  
  listaPersonas: any;

  constructor(private router: Router, private orderLM: OrderListModule) { }

  ngOnInit(): void {
    this.cargarPersonas();
  }

  cargarPersonas(){
    
  }

  crearPersona(){
    this.router.navigate(['crearPersona']);
  }

}
