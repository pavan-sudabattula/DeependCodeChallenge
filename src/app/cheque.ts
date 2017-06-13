let nextId = 1;

export class Cheque {
  id: number;
  constructor(
    public name: string,
    public date: any,
    public amount: number) {
      this.id = nextId++;
    }
}
