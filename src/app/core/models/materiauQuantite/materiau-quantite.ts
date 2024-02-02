import { Materiaux } from "../materiaux/materiaux";

export class MateriauQuantite {
  constructor(
    public materiaux?: Materiaux,
    public quantite?: number,
  ) {
  }
}
