import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { personaS } from '../domain/persona';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PersonawsService {
  
  constructor(private http: HttpClient) { }

  getPersonas(): Observable<any[]>{
    let url = environment.WS_PATH +'/persona/listaPersonas';
    return this.http.get<any>(url);
  }

  crearPersona(persona: personaS){
    let url = environment.WS_PATH + '/persona/crear?id=' + persona.id + '&cedula=' + persona.cedula
      + '&nombre=' + persona.nombre + '&apellido=' + persona.apellido + '&email=' + persona.email;
    return this.http.post<any>(url, persona);
  }
}
