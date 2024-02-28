import { Component, EventEmitter, Input , OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { AsyncPipe, JsonPipe, KeyValuePipe, NgForOf, NgIf } from "@angular/common";
import { CommonService } from "../../../service/common/common.service";

@Component({
  selector: 'app-add-generic-item',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    KeyValuePipe,
    NgForOf,
    JsonPipe,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './add-generic-item.component.html',
  styleUrl: './add-generic-item.component.css'
})
export class AddGenericItemComponent implements OnInit{
  @Input() model: any;
  @Output() formSubmit = new EventEmitter<any>();
  public form!: FormGroup;
  public tags$;


  constructor(
    private fb: FormBuilder,
    private readonly commonService: CommonService) {
    this.tags$ = this.commonService.getTags();
  }

  ngOnInit() {
    console.log('ngInit', this.model);
    const controls = Object.keys(this.model).reduce((acc: Record<string, any>, key: string) => {
      if (Array.isArray(this.model[key]) && typeof this.model[key][0] === 'string') {
        acc[key] = [''];
      } else if (typeof this.model[key] === 'string') {
        acc[key] = '';
      } else if (typeof this.model[key] === 'number') {
        acc[key] = 0;
      } else if (key === 'tags' && Array.isArray(this.model[key])) {
        acc[key] = this.model[key];
      } else if (key === 'file') {
        acc[key] = this.model[key] || '';
      }
      return acc;
    }, {});

    console.log('controls', controls);
    this.form = this.fb.group(controls);
    console.log('form', this.form.controls);
    for (const control in this.form.controls) {
      console.log('control', control);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    }
  }
}
