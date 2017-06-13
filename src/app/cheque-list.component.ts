import { Component, OnInit }  from '@angular/core';

import { Cheque } from './cheque';
import { ChequeService }  from './services/cheque.service';

@Component({
  selector:    'cheque-list',
  templateUrl: './cheque-list.component.html',
  providers:  [ ChequeService ]
})
export class ChequeListComponent implements OnInit {
  cheques: Cheque[];
  selectedCheque: Cheque;

  constructor(private service: ChequeService) { }

  ngOnInit() {
    this.cheques = this.service.getCheques();
  }

  selectCheque(cheque: Cheque) { this.selectedCheque = cheque; }
}
