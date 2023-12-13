export class Materiaux {
  constructor(
    public id?: number,
    public nomMateriaux: string = '',
    public typeRecyclage: string = '',
    public coutRecyclage: number = 0,
    public energieRecyclage: number = 0,
  ) {
  }
}
