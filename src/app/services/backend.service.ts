import { Injectable, Type } from '@angular/core';
import { Cheque } from '../cheque';

const cheques = [
        new Cheque('Pavan', '11-Jun-2017', 100021.22),
        new Cheque('Watson', '07-Jun-2017', 1000.55),
        new Cheque('John', '01-Jun-2017', 9098.66)
      ];

@Injectable()
export class BackendService {
  constructor() {}

  getAll(type: Type<any>): PromiseLike<any[]> {
    if (type === Cheque) {
      // TODO get from the database
      return Promise.resolve<Cheque[]>(cheques);
    }
    let err = new Error('Cannot get object of this type');
    throw err;
  }
}
