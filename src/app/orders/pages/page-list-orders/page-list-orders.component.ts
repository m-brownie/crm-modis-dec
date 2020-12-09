import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  public collection!: Order[];

  constructor(private os: OrdersService) {
    // Appel http effectué à ce moment là (au moment du subscribe)
    this.os.collection.subscribe((data) => {
      this.collection = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
