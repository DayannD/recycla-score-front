import { Component, Input } from '@angular/core';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [
    MatCheckboxModule,
    FormsModule
  ],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  @Input() checked: boolean = false;
  @Input() label: string = '';
}
