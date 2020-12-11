import { Component, Input, OnInit, OnChanges, ViewEncapsulation } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableLightComponent implements OnInit {

  // Permet d'utiliser l'objet dans le parent
  @Input()
  headers!: string[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
