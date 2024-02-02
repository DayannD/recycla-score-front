export class Materiaux {
  constructor(
    public id?: number,
    public nomMateriau: string = '',
    public typeRecyclage: string = '',
    public coutRecyclage: number = 0,
    public energieRecyclage: number = 0,
  ) {
  }
}
