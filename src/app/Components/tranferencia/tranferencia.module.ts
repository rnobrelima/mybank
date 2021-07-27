import { TranferenciaComponent } from './tranferencia.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TranferenciaComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TranferenciaComponent]
})
export class TranferenciaModule { }
