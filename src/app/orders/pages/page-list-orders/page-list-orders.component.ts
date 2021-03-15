import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';


@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit, OnDestroy {

  // public collection!: Order[];

  public collection$: Subject<Order[]> = new Subject();

  public states = Object.values(StateOrder);

  public headers!: string[];

  public searchText!: string;

  private obs = new Observable((subscribers) => {
    subscribers.next('Obserbalbe');
  });

  private sub: Subscription;

  // Exemple pour désouscrire de l'observable.
  // Pas nécessaire en réalité car l'observable
  // est fourni par Http
  // private sub!: Subscription;

  constructor(private os: OrdersService,
              private cd: ChangeDetectorRef,
              private router: Router) {
    // Appel http effectué à ce moment là (au moment du subscribe)
    /*this.sub = this.os.collection.subscribe((data) => {
      this.collection = data;
      console.log(data);
    });*/

    this.sub = this.obs.subscribe((data) => {
      console.log('1- Subscribe to the Observable : ' + data);
    });

    // Initialisation des headers du tableau des Page List Orders
    this.headers = [
      'Actions',
      'Type',
      'Client',
      'NB jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State'
    ];
  }

  ngOnInit(): void {

    this.os.collection.subscribe((datas) => {
      console.log("2- Subscribe à la collection du service - datas : " + datas);
      this.collection$.next(datas);
    });

  }

  ngOnDestroy(): void {
    // Pour l'exemple, pas nécessaire, car c'est issu de Http
    this.sub.unsubscribe();
  }

  public changeState(item: Order, event: any): void {

    const state = event.target.value;
    this.os.changeState(item, state).subscribe((res) => {
      // On met à jour la valeur dans le front
      // SEULEMENT APRES l'avoir mis à jour en BDD
      // cf order.service.ts dans la méthode changeState()
      item.state = res.state;
      this.cd.detectChanges();
    });
  }

  public goToEdit(item: Order): void {
    this.router.navigate(['orders', 'edit', item.id]);
  }

  public delete(item: Order): void {

    this.os.delete(item).subscribe((res) => {

      console.log("Delete - Subscribe au delete du service " + res);

      this.os.collection.subscribe((datas) => {

        console.log("Delete - Subscribe à la collection du service - datas : " + datas);
        this.collection$.next(datas);
      });
    });

  }
}
