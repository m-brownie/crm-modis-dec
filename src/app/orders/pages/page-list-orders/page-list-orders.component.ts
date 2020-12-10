import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit, OnDestroy {

  // public collection!: Order[];

  public collection$!: Observable<Order[]>;

  public headers!: string[];

  // Exemple pour désouscrire de l'observable.
  // Pas nécessaire en réalité car l'observable
  // est fourni par Http
  // private sub!: Subscription;

  constructor(private os: OrdersService) {
    // Appel http effectué à ce moment là (au moment du subscribe)
    /*this.sub = this.os.collection.subscribe((data) => {
      this.collection = data;
      console.log(data);
    });*/

    this.collection$ = this.os.pCollection$;

    // Initialisation des headers du tableau des Page List Orders
    this.headers = ['Type',
      'Client',
      'NB jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State'
    ];
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // Pour l'exemple, pas nécessaire, car c'est issu de Http
    // this.sub.unsubscribe();
  }

}
