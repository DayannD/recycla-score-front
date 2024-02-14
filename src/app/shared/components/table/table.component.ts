import { Component, Input, OnInit } from '@angular/core';
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
export class TableComponent implements OnInit{
  @Input() datas!: any[];
  @Input() columns: { key: string, title: string }[] = [];
  @Input() link = '';
  @Input() canModify = true;
  constructor() {
    // console.log("test", this.data)
  }

  ngOnInit(): void {
    console.log("columns",this.columns);
console.log("datas",this.datas);

    for (let data of this.datas) {
      console.log("data",data);
      for (let column of this.columns) {
        console.log("column",column.key);
        console.log(data[column.key]);
      }
    }
  }

  getCellData(data: any, columnKey: string): any {
    const keys = columnKey.split('.');
    console.log("KEYS",columnKey);
    console.log("JE SUIS RENTRER",data.materiauxDTO[keys[0]])
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
    console.log("materiauxSplit",materiauxSplit[0]);
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

}
