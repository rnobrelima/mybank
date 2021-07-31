import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mybank';
  transferencias: any[] = [];

  recebeTransferencia(data: any) {
    const trasferencia = { ...data, data: new Date() }; // spread Operator Clona os itens do objeto e adiciona a data
    this.transferencias.push(trasferencia);
  }
}
