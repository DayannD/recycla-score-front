import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgIf } from "@angular/common";
import { AuthService } from "../../../../service/auth/auth.service";

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly authService: AuthService
  ) {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}
