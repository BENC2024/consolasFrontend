import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs'
import { Consolas } from '../interfaces/consolas';

@Injectable({
  providedIn: 'root'
})
export class ConsolasService {

   //Private httpClient = Inject(Httpclient)
   //baseURL1 = "https://benc2024.github.io/ConsolaGames/consolas.json"
   baseURL1 = "http://localhost:3000/listConsolas" //http://localhost:3000/listConsolas
   baseURL2 = "http://localhost:3000/saveConsola"

   constructor(private httpClient: HttpClient) { }

   listadoConsolas():Observable<any>{
      //Se hace la peticion HTTP de la URL
      return this.httpClient.get(this.baseURL1).pipe( catchError( e => { return throwError(e) } ) )
   }

   guardarConsola(consola: Consolas):Observable<any>{
      return this.httpClient.post(this.baseURL2,consola).pipe(
         catchError(
            e => {
               console.log(e)
               return e
            }
         )
      )
   }

}
