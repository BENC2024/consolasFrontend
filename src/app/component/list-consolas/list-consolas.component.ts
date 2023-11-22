import { Component, Inject } from '@angular/core';
import { ConsolasService } from 'src/app/services/consolas.service';

@Component({
  selector: 'app-list-consolas',
  templateUrl: './list-consolas.component.html',
  styleUrls: ['./list-consolas.component.scss']
})
export class ListConsolasComponent {

   //private consolaServicio = Inject(ConsolasService) Utilizando signal
   constructor(private consolaServicio: ConsolasService){}

   //listaConsolas = {}
   public listaConsolas: any[] = [] //REcibe los datos del tipo objeto

   async ngOnInit(){ //Inicio asincrono
      this.consolaServicio.listadoConsolas().subscribe(
         lista => {
            this.listaConsolas = lista
         }
      )
   }

}
