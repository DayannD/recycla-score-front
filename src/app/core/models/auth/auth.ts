export class Auth {
  constructor(
    public id?: number,
    public email: string = '',
    public password: string = '',
    public token?: string,
  ) {}
}
