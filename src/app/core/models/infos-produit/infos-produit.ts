import { MateriauQuantite } from "../materiauQuantite/materiau-quantite";

export class InfosProduit {
  constructor(
    public nomProduit: string = '',
    public description: string = '',
    public scoreRecyclabilite: number = 0,
    public poids: number = 0,
    public volume: number = 0,
    public file?: string,
    public materiaux?: MateriauQuantite[]
  ) {}
}
