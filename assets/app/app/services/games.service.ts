import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../../environments/environment';

import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Game } from '../models/game';


@Injectable({
  providedIn: 'root'
})
export class GamesService {


  constructor(private http: HttpClient) {

  }

  getGames() : Promise<any>{
    return new Promise((resolve,reject)=>{
      environment.sails_services_urlpath
    this.http.get(environment.sails_services_urlpath+":"+environment.sails_services_urlport+'/users').subscribe((res:any)=>{
      resolve(res.data);
    },reject)
  })
}




deleteGame(identificador):Observable<any>{
  return this.http.delete(  environment.sails_services_urlpath +
    ":" +
    environment.sails_services_urlport +
    "/game/delete",
  { params: { id: identificador.id } }
);
}

addGame(game:any){
let json = JSON.stringify(game);
let headers = new HttpHeaders().set('Content-Type','aplicacion/json');
return this.http.post("http://localhost:1337/game/",json,{headers:headers});

}

obtenerList():Observable<any>{
return this.http.get("http://localhost:1337/game");
}


}
