import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AddGenericItemComponent } from "../../../../shared/components/add-generic-item/add-generic-item.component";
import { Produit } from "../../../../core/models/produit/produit";

@Component({
  selector: 'app-add-produit',
  standalone: true,
  imports: [
    AddGenericItemComponent
  ],
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.css'
})
export class AddProduitComponent {
  public model: Produit;
  @Output() formSubmit = new EventEmitter<any>();

  constructor() {
    this.model = new Produit();
  }
}
