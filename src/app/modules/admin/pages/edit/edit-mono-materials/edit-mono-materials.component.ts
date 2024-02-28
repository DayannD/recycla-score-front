import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { EnumMonoMaterial } from "../../../../../core/models/enum/enum-mono-material";
import { MonoMaterialService } from "../../../../../service/mono-material/mono-material.service";
import { MaterialMappingService } from "../../../../../shared/services/material-mapping.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MonoMaterial } from "../../../../../core/models/mono-material/mono-material";
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-edit-mono-materials',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './edit-mono-materials.component.html',
  styleUrl: './edit-mono-materials.component.css'
})
export class EditMonoMaterialsComponent implements OnInit{
  public monoMaterialForm: FormGroup;
  protected monoMateriau!: MonoMaterial;
  materials = Object.values(EnumMonoMaterial);

  constructor(
    private fb: FormBuilder,
    private readonly monoMaterialService: MonoMaterialService,
    private readonly materialMapping: MaterialMappingService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {
    this.monoMaterialForm = this.fb.group({
      name: ['', Validators.required],
      material: ['', Validators.required],
      recyclability: ['', Validators.required]
    });
  }

  ngOnInit() {

    this.activatedRoute.data.subscribe(data => {
      console.log('data', data);
      this.monoMateriau = data['monoMaterial'];
      this.monoMaterialForm.patchValue(this.monoMateriau);
      this.monoMaterialForm.controls['material'].setValue(this.materialMapping.getEnumValue(this.monoMateriau.material!));
    });
  }

  onSubmit(): void {
    if (this.monoMaterialForm.valid) {
      console.log("je suis valid")
      const formValue = this.monoMaterialForm.value;
      formValue.material = this.materialMapping.getEnumValue(formValue.material);
      formValue.id = this.monoMateriau.id;
      this.monoMaterialService.updateMonoMaterial(formValue).subscribe();
      this.router.navigateByUrl("/admin");
    }
  }
}
