import { TranferenciaModule } from './Components/tranferencia/tranferencia.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TranferenciaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
