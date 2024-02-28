import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MateriauService } from "../../../../../service/materiau/materiau.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Materiaux } from "../../../../../core/models/materiaux/materiaux";
import { map } from "rxjs";

@Component({
  selector: 'app-edit-materiau',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-materiau.component.html',
  styleUrl: './edit-materiau.component.css'
})
export class EditMateriauComponent implements OnInit{
  protected materiau!: Materiaux;
  materiauForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly materiauService: MateriauService,
    private readonly router: Router,
    private readonly actvitatedRoute: ActivatedRoute
  ) {

    this.materiauForm = this.fb.group({
      nomMateriau: ['', Validators.required],
      typeRecyclage: ['', Validators.required],
      coutRecyclage: ['', Validators.required],
      energieRecyclage: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.actvitatedRoute.data.subscribe((data) => {
      this.materiau = data['materiau'];
      this.materiauForm.patchValue(this.materiau);
    });
  }

  onSubmit() {
    console.log(this.materiauForm.value);
    if (this.materiauForm.valid) {
      const formValue = this.materiauForm.value;
      formValue.id = this.materiau.id;
      this.materiauService.updateMateriau(formValue).subscribe();
      this.router.navigateByUrl("/admin");
    }
  }

}
