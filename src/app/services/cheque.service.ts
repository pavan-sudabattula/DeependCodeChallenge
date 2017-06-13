import { Injectable } from '@angular/core';

import { Cheque } from '../cheque';
import { BackendService } from './backend.service';

@Injectable()
export class ChequeService {
  private cheques: Cheque[] = [];

  constructor(
    private backend: BackendService) { }

  getCheques() {
    this.backend.getAll(Cheque).then( (cheques: Cheque[]) => {
      this.cheques.push(...cheques);
    });

    return this.cheques;
  }
}
