import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListConsolasComponent } from './component/list-consolas/list-consolas.component';
import { SaveConsolasComponent } from './component/save-consolas/save-consolas.component';
import { AppComponent } from './app.component';

const routes: Routes = [
   {path:"listadoConsolas", component:ListConsolasComponent},
   {path:"guardarConsolas", component:SaveConsolasComponent},
//   {path:"", component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
