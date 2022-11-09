import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './Global';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public url = global.url;
  constructor(private _http: HttpClient) { }

  addPokemon(token: any, paciente: any): Observable<any> {
    let params = JSON.stringify(paciente);
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', token);

    return this._http.post(this.url + 'pokemon', params, { headers: headers });
  }

  getMyPokemon(userID: any): Observable<any> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')


    return this._http.get(this.url + 'user-pokemon/'+ userID, { headers: headers });
  }
  getPokemon(id: any):Observable<any>{
    return this._http.get(this.url+'pacientes/detalles/'+id);
  }

  update(token:any, id:any, paciente:any): Observable<any>{

    let params = JSON.stringify(paciente);
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', token);
    return this._http.put(this.url+'pokemon/update/'+id, params,{headers: headers});
  }

  delete(token:any,id:any):Observable<any>{

    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', token);

    return this._http.delete(this.url + 'pokemon/delete/'+id, { headers: headers });

  }

  getALL(token:any) {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', token);
    return this._http.get(this.url + '/pokemon', { headers: headers })
  }
}
