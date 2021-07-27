import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tranferencia',
  templateUrl: './tranferencia.component.html',
  styleUrls: ['./tranferencia.component.scss'],
})
export class TranferenciaComponent implements OnInit {
  @Output() onSubmitTranferencia = new EventEmitter<any>();


  valor!: number ;
  destino!: number;
  saldo = 5000;
  constructor() {

  }

  ngOnInit(): void {}

  submitForm() {
    if (this.saldo === 0 || this.saldo < this.valor) {
      alert('Saldo Insuficiente!');
    } else {
      this.onSubmitTranferencia.emit({
        valor: this.valor,
        destino: this.destino,
      });
      this.saldo = this.saldo - this.valor;
      this.limpaTransferencia();
    }
  }

  limpaTransferencia() {
    this.valor = 0;
    this.destino = 0;
  }
}
