import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mybank';
  valor!: number;
  destino!: number;

  recebeTransferencia(data: any) {
    this.valor = data.valor;
    this.destino = data.destino;
  }
}
