export class Utilisateur {
  constructor(
    public id?: number,
    public nomUtilisateur: string = '',
    public email: string = '',
    public role: string = '',
    public motDePasse: string = '',
    public token?: string,
  ) {}
}
