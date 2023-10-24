import {EnumMonoMaterial} from "../enum/enum-mono-material";

export class MonoMaterial {
  constructor(
    public id?: number,
    public name: string ='',
    public material?: EnumMonoMaterial,
    public recyclability: string = '',
  ) {}
}
