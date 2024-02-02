import { Component } from '@angular/core';
import { InputComponent } from "../../../shared/input/input.component";
import { BtnComponent } from "../../../shared/btn/btn.component";
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { ContactMail } from "../../../core/models/contact-mail/contact-mail";
import { EnumObjectMail } from "../../../core/models/enum/enum-object-mail";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    InputComponent,
    BtnComponent,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  public mail = new ContactMail();
  public enumOptions = Object.values(EnumObjectMail)
  emailControl = new FormControl('', [Validators.required, Validators.email, Validators.minLength(5)]);
  nameControl = new FormControl('', [Validators.required]);
  messageControl = new FormControl('', [Validators.required]);
  objectControl = new FormControl('', [Validators.required]);
  mailForm = this.formBuilder.group({
    email: this.emailControl,
    name: this.nameControl,
    object: this.objectControl,
    message: this.messageControl,
  });

  constructor(
    private readonly formBuilder: FormBuilder,
  ) {
    console.log("contact",this.enumOptions);
  }

  onSubmit() {
    if (this.mailForm.valid && this.mailForm.value.email && this.mailForm.value.name && this.mailForm.value.object && this.mailForm.value.message) {
      console.log(this.mail);
    } else {
      console.log('Email ou mot de passe incorrect');
    }
  }
}

