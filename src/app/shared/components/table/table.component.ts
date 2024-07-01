import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produit } from "../../../core/models/produit/produit";
import { Materiaux } from "../../../core/models/materiaux/materiaux";
import { MonoMaterial } from "../../../core/models/mono-material/mono-material";
import { JsonPipe, NgForOf, NgIf } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NgForOf,
    JsonPipe,
    RouterLink,
    NgIf
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  @Input() datas!: any[];
  @Input() columns: { key: string, title: string }[] = [];
  @Input() link = '';
  @Input() canModify = true;

  @Output() deleteId: EventEmitter<number> = new EventEmitter<number>();
  @Output() editId: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    // console.log("test", this.data)
  }

  ngOnInit(): void {
  }

  getCellData(data: any, columnKey: string): any {
    const keys = columnKey.split('.');
    let value = data;
    for (const key of keys) {
      if (value[key] !== undefined) {
        value = value[key];
      } else {
        return undefined;
      }
    }
    return value;
  }

  splitColumn(data: string): string {
    const materiauxSplit = data.split('.');
    return materiauxSplit[0];
  }

  getImageSrc(byteString: string | undefined): string {
    if (!byteString) {
      return '';
    }

    return 'data:image/' + this.getMimeType(byteString) + ';base64,' + byteString;
  }

  getMimeType(dataUrl: string): string {
    let splitDataUrl = dataUrl.split(',');
    if (splitDataUrl.length < 2) {
      return '';
    }

    let mimeType = splitDataUrl[0].split(':')[1].split(';')[0];
    return mimeType;
  }

  getId(id: number) {
    this.deleteId.emit(id);
  }

  editById(id: number) {
    console.log("ID", id)
    this.editId.emit(id);
  }
}
