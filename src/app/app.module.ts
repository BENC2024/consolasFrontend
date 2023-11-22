import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListConsolasComponent } from './component/list-consolas/list-consolas.component';
import { SaveConsolasComponent } from './component/save-consolas/save-consolas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListConsolasComponent,
    SaveConsolasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
