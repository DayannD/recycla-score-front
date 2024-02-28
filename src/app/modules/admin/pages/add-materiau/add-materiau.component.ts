import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MateriauService } from "../../../../service/materiau/materiau.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-materiau',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-materiau.component.html',
  styleUrl: './add-materiau.component.css'
})
export class AddMateriauComponent {
  materiauForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly materiauService: MateriauService,
    private readonly router: Router
  ) {
    this.materiauForm = this.fb.group({
      nomMateriau: ['', Validators.required],
      typeRecyclage: ['', Validators.required],
      coutRecyclage: ['', Validators.required],
      energieRecyclage: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.materiauForm.value);
    if (this.materiauForm.valid) {
      const formValue = this.materiauForm.value;
      this.materiauService.addMateriau(formValue).subscribe();
      this.router.navigateByUrl("/admin");
    }
  }
}
