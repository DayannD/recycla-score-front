import { Component } from '@angular/core';
import { InputComponent } from "../../../shared/input/input.component";
import { BtnComponent } from "../../../shared/btn/btn.component";
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { ContactMail } from "../../../core/models/contact-mail/contact-mail";
import { EnumObjectMail } from "../../../core/models/enum/enum-object-mail";
import { CommonService } from "../../../service/common/common.service";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { NgIf } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { DialogComponent } from "../../../shared/dialog/dialog.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    InputComponent,
    BtnComponent,
    ReactiveFormsModule,
    NgIf,
    MatProgressSpinnerModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  public mail = new ContactMail();
  public loading = false;
  public enumOptions = Object.values(EnumObjectMail)
  fromControl = new FormControl('', [Validators.required, Validators.email, Validators.minLength(5)]);
  nameControl = new FormControl('', [Validators.required]);
  messageControl = new FormControl('', [Validators.required]);
  objectControl = new FormControl('', [Validators.required]);
  mailForm = this.formBuilder.group({
    from: this.fromControl,
    name: this.nameControl,
    object: this.objectControl,
    message: this.messageControl,
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly commonService: CommonService,
    private readonly router: Router,
    public readonly dialog: MatDialog
  ) {
    console.log("contact",this.enumOptions);
  }

  onSubmit() {
    if (this.mailForm.valid && this.mailForm.value.from && this.mailForm.value.name && this.mailForm.value.object && this.mailForm.value.message) {
      console.log(this.mailForm.value);
      this.commonService.sendMail(this.mailForm.value as ContactMail).subscribe();
      setTimeout(() => {
        this.loading = true;
        this.openDialog('Votre message a bien été envoyé');
      },
      2000);
      this.loading = false;
      this.router.navigate(['/acceuil']);
    } else {
      console.log('Email ou mot de passe incorrect');
    }
  }

  private openDialog(message: string) {
    this.dialog.open(DialogComponent, {
      width: '250px',
      data: { message: message }
    });
  }
}

