import { EnumObjectMail } from "../enum/enum-object-mail";

export class ContactMail {
  constructor(
    public name: string = '',
    public email: string = '',
    public message: string = '',
    public object: string = '',
  ) { }

}
