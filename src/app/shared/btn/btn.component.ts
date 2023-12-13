import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.scss'
})
export class BtnComponent {
  @Input() css: string = '';
  @Input() name: string = '';
  @Output() clickEmitter: EventEmitter<any> = new EventEmitter<any>();
}
