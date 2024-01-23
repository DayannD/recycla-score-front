export enum EnumMonoMaterial {
  ACIER_INOX = 'Acier Inoxydable',
  POLY_EXPAN = 'Polystyrène Expansé'
}

const materialMap = new Map<string, EnumMonoMaterial>([
  ['Acier Inoxydable', EnumMonoMaterial.ACIER_INOX],
  ['Polystyrène Expansé', EnumMonoMaterial.POLY_EXPAN]
]);
