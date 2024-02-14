import { Component } from '@angular/core';
import {
  MonoMaterialFormComponent
} from "../../../../shared/components/mono-material-form/mono-material-form.component";

@Component({
  selector: 'app-add-mono-materials',
  standalone: true,
  imports: [
    MonoMaterialFormComponent
  ],
  templateUrl: './add-mono-materials.component.html',
  styleUrl: './add-mono-materials.component.css'
})
export class AddMonoMaterialsComponent {

}
