import { EnumTags } from "../enum/enum-tags";

export class MultiPartProduit{
  constructor(
    public id?: number,
    public nomProduit: string = '',
    public description: string = '',
    public scoreRecyclabilite: number = 0,
    public poids: number = 0,
    public volume: number = 0,
    public file?: FormData,
    public tags: EnumTags[] = []
  ) {}
}
