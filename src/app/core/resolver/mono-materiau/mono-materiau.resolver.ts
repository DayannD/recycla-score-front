import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { MonoMaterialService } from "../../../service/mono-material/mono-material.service";
import { MonoMaterial } from "../../models/mono-material/mono-material";

export const monoMateriauResolver: ResolveFn<MonoMaterial> = (
  route,
  state,
  monoMaterauSerivce = inject(MonoMaterialService)) => {
  return monoMaterauSerivce.getOneMonoMaterial(route.params['id']);
};
