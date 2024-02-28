import { Component, EventEmitter, Output } from '@angular/core';
import { AddGenericItemComponent } from "../../../../shared/components/add-generic-item/add-generic-item.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from "@angular/forms";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { CommonService } from "../../../../service/common/common.service";
import { map } from 'rxjs';
import { MatSelectModule } from "@angular/material/select";
import { ProduitService } from "../../../../service/Produit/produit.service";

@Component({
  selector: 'app-add-produit',
  standalone: true,
  imports: [
    AddGenericItemComponent,
    ReactiveFormsModule,
    AsyncPipe,
    NgForOf,
    NgIf,
    MatSelectModule
  ],
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.css'
})
export class AddProduitComponent {
  protected produitForm: FormGroup;
  protected tags: string[] | undefined;
  @Output() formSubmit = new EventEmitter<any>();

  constructor(
    private readonly fb: FormBuilder,
    private readonly commonService: CommonService,
    private readonly produitService: ProduitService
  ) {
    this.commonService.getTags().pipe(
      map((tags: string[]) => {
        this.tags = tags
      }
    )).subscribe();
    console.log('tags', this.tags);
    this.produitForm = this.fb.group({
      nomProduit: ['', Validators.required],
      description: ['', Validators.required],
      tags: [[]],
      file: ['', Validators.required],
      poids: [0, Validators.required],
      volume: [0, Validators.required],
      scoreRecyclabilite: [0, Validators.required]
    });
  }

  onSubmit() {
    console.log('onSubmit');
    console.log('this produit',this.produitForm.value);
    if (this.produitForm.valid) {
      const formValue = this.produitForm.value;
      this.produitService.addProduit(formValue).subscribe();
      console.log('formValue', formValue);
    } else {
      console.log('form is invalid');
      // Log the errors of each form control
      Object.keys(this.produitForm.controls).forEach(key => {
        const controlErrors: ValidationErrors | null = this.produitForm.get(key)!.errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
          });
        }
    })}
  }
}
