import { Component } from '@angular/core';
import { Consolas } from 'src/app/interfaces/consolas';
import { ConsolasService } from 'src/app/services/consolas.service';

@Component({
  selector: 'app-save-consolas',
  templateUrl: './save-consolas.component.html',
  styleUrls: ['./save-consolas.component.scss']
})
export class SaveConsolasComponent {

   consola: Consolas = 
   {
      nombre:"",
      fabricante:"",
      lanzamiento:"",
      almacenamiento:"",
      precio:0,
      enlace:""
   }

   constructor(private consolaService: ConsolasService){}

   guardarConsola(){
      this.consolaService.guardarConsola(this.consola)
   }

}