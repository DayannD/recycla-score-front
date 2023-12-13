import { Component } from '@angular/core';
import { Auth } from "../../../../core/models/auth/auth";
import { FormBuilder, FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { InputComponent } from "../../../../shared/input/input.component";
import { CheckboxComponent } from "../../../../shared/checkbox/checkbox.component";
import { BtnComponent } from "../../../../shared/btn/btn.component";
import { NgIf } from "@angular/common";

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
    // private readonly authService: AuthService,
    private readonly route: Router,
    private readonly formBuilder: FormBuilder
  ) {

  }
  onSubmit() {
    console.log(this.authForm.value);
    // this.submitted = true;
    // if (!f.valid) return;
    //
    // this.authService
    //   .auth(f.value.email, f.value.password)
    //   .pipe(
    //     catchError((error) => {
    //       this.errorMessage = 'Email ou mot de passe invalid';
    //       return throwError(error);
    //     })
    //   )
    //   .subscribe();
  }

  click() {

  }
}
