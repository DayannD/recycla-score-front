import { Component, Input } from '@angular/core';
import { NgClass } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { EnumObjectMail } from "../../core/models/enum/enum-object-mail";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    NgClass,
    FormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() cssLabel: string = '';
  @Input() css: string = '';
  @Input() type: string = '';
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() model: string = '';
  @Input() enumOptions?: string[];

  constructor() {
  }

  isEnum() {
    return this.type === 'enum';
  }
}

