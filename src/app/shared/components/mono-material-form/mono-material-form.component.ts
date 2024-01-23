import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {EnumMonoMaterial} from "../../../core/models/enum/enum-mono-material";
import {MonoMaterialService} from "../../../core/services/mono-material/mono-material.service";
import {MaterialMappingService} from "../../services/material-mapping.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mono-material-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './mono-material-form.component.html',
  styleUrls: ['./mono-material-form.component.css']
})
export class MonoMaterialFormComponent {
  public monoMaterialForm: FormGroup;
  materials = Object.values(EnumMonoMaterial);

  constructor(
    private fb: FormBuilder,
    private readonly monoMaterialService: MonoMaterialService,
    private readonly materialMapping: MaterialMappingService,
    private readonly router: Router
  ) {
    this.monoMaterialForm = this.fb.group({
      name: ['', Validators.required],
      material: ['', Validators.required],
      recyclability: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.monoMaterialForm.valid) {
      console.log("je suis valid")
      const formValue = this.monoMaterialForm.value;
      formValue.material = this.materialMapping.getEnumValue(formValue.material);
      this.monoMaterialService.addMonoMaterial(formValue).subscribe();
      this.router.navigateByUrl("/");
    }
  }

}
