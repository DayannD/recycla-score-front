import { Component } from '@angular/core';
import { Auth } from "../../../../core/models/auth/auth";
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { InputComponent } from "../../../../shared/input/input.component";
import { CheckboxComponent } from "../../../../shared/checkbox/checkbox.component";
import { BtnComponent } from "../../../../shared/btn/btn.component";
import { NgIf } from "@angular/common";
import { AuthService } from "../../../../service/auth/auth.service";
import { catchError, of, tap } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "../../../../shared/dialog/dialog.component";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    CheckboxComponent,
    BtnComponent,
    RouterLink,
    NgIf
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  public auth: Auth = new Auth();
  emailControl = new FormControl('', [Validators.required, Validators.email, Validators.minLength(5)]);
  passwordControl = new FormControl('', [Validators.required]);
  errorMessage!: string;
  authForm = this.formBuilder.group({
    email: this.emailControl,
    password: this.passwordControl,
  });

  constructor(
    private readonly authService: AuthService,
    private readonly route: Router,
    private readonly formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {}

  onSubmit() {
    if (this.authForm.valid && this.authForm.value.email && this.authForm.value.password) {
      this.authService
        .auth(this.authForm.value.email, this.authForm.value.password)
        .pipe(
          tap((res) => {
            this.route.navigate(['/acceuil']);
          }),
          catchError((error) => {
            console.log("error",error)
            this.errorMessage = 'Login failed';
            this.openDialog(this.errorMessage);
            return of();
          })
        ).subscribe();
    } else {
      this.errorMessage = 'Email ou mot de passe incorrect';
      this.openDialog(this.errorMessage);
    }
  }

  openDialog(message: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {message: message}
    })

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
