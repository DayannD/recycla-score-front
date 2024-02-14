import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, NgIf } from "@angular/common";
import { TableComponent } from "../../../../shared/components/table/table.component";
import { ActivatedRoute } from "@angular/router";
import { map, Observable } from "rxjs";
import { InfosProduit } from "../../../../core/models/infos-produit/infos-produit";

@Component({
  selector: 'app-infos-item',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    TableComponent
  ],
  templateUrl: './infos-item.component.html',
  styleUrl: './infos-item.component.css'
})
export class InfosItemComponent implements OnInit{
  public produit$!: Observable<InfosProduit>;

  public columnsMateriau = [
    { key: 'materiauxDTO.nomMateriau', title: 'Nom' },
    { key: 'materiauxDTO.typeRecyclage', title: 'Type de recyclage' },
    { key: 'materiauxDTO.energieRecyclage', title: 'Energie Recyclage' },
    { key: 'materiauxDTO.coutRecyclage', title: 'Cout Recyclage' },
    { key: 'quantite', title: 'Quantite' },
    ];
  constructor(
    private readonly actvitatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.produit$ = this.actvitatedRoute.data.pipe(
      map((data) =>
       data['produit']
      )
    );
    console.log(this.produit$.subscribe(produit => console.log(produit)));
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
