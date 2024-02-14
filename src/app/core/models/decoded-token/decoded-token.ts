export class DecodedToken {
 constructor(
    public id?: string,
    public email?: string,
    public role?: string,
    public iat?: number,
    public exp?: number
 ) {
 }
}
