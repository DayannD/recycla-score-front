import { Component } from '@angular/core';
import { BtnComponent } from "../../../../shared/btn/btn.component";
import { CheckboxComponent } from "../../../../shared/checkbox/checkbox.component";
import { InputComponent } from "../../../../shared/input/input.component";
import { NgIf } from "@angular/common";
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { catchError, of, tap } from "rxjs";
import { AuthService } from "../../../../service/auth/auth.service";
import { Utilisateur } from "../../../../core/models/utilisateur/utilisateur";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "../../../../shared/dialog/dialog.component";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    BtnComponent,
    CheckboxComponent,
    InputComponent,
    NgIf,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  public user: Utilisateur = new Utilisateur();
  emailControl = new FormControl('', [Validators.required, Validators.email, Validators.minLength(5)]);
  passwordControl = new FormControl('', [Validators.required]);
  nameUserControl = new FormControl('', [Validators.required]);
  errorMessage!: string;
  authForm = this.formBuilder.group({
    email: this.emailControl,
    password: this.passwordControl,
    nameUser: this.nameUserControl
  });

  constructor(
    public dialog: MatDialog,
    private readonly authService: AuthService,
    private readonly route: Router,
    private readonly formBuilder: FormBuilder
  ) {

  }
  onSubmit() {
    if (this.authForm.valid && this.authForm.value.email && this.authForm.value.password && this.authForm.value.nameUser) {
      this.authService
        .register(this.authForm.value.nameUser, this.authForm.value.email, this.authForm.value.password)
        .pipe(
          tap((res) => {
            this.openDialog('Inscription réussie, un from de confirmation vous a été envoyé');
            this.route.navigate(['/']);
          }),
          catchError((error) => {
            console.log(error);
            this.errorMessage = 'Email ou mot de passe incorrect';
            this.openDialog(this.errorMessage);
            return of();
          })
        ).subscribe();
    } else {
      this.errorMessage = 'Email ou mot de passe incorrect';
    }
  }

  openDialog(message: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {message: message}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
