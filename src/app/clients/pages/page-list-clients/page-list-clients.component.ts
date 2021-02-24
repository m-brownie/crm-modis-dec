import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client.enum';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from 'src/app/core/services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public collection$: Subject<Client[]> = new Subject();

  public states = Object.values(StateClient);

  public headers!: string[];

  private obs = new Observable((subscribers) => {
    subscribers.next('Observable');
  });

  private sub: Subscription;

  constructor(private cs: ClientsService,
              private cd: ChangeDetectorRef,
              private router: Router) {
    // Appel http effectué à ce moment là (au moment du subscribe)
    /*this.sub = this.cs.collection.subscribe((data) => {
      this.collection = data;
      console.log(data);
    });*/

    this.sub = this.obs.subscribe((data) => {
      console.log("1- Subscribe to the Observable : " + data);
    });

    // Initialisation des headers du tableau des Page List Clients
    this.headers = [
      'Actions',
      'Name',
      'Total CA HT',
      'TVA',
      'Total TTC',
      'State'
    ];
  }

  ngOnInit(): void {

    this.cs.collection.subscribe((datas) => {
      console.log("2- Subscribe à la collection du service - datas : " + datas);
      this.collection$.next(datas);
    });

    //this.collection$ = this.cs.pCollection$;
  }

  ngOnDestroy(): void {
    // Pour l'exemple, pas nécessaire, car c'est issu de Http
    this.sub.unsubscribe();
  }

  public changeState(item: Client, event: any): void {

    const state = event.target.value;
    this.cs.changeState(item, state).subscribe((res) => {
      // On met à jour la valeur dans le front
      // SEULEMENT APRES l'avoir mis à jour en BDD
      // cf order.service.ts dans la méthode changeState()
      item.state = res.state;
      this.cd.detectChanges();
    });
  }

  public delete(item: Client): void {

    this.cs.delete(item).subscribe((res) => {

      console.log("Delete - Subscribe au delete du service " + res);

      this.cs.collection.subscribe((datas) => {

        console.log("Delete - Subscribe à la collection du service - datas : " + datas);
        this.collection$.next(datas);
      });
    });
  }

  public goToEdit(item: Client): void {
    this.router.navigate(['clients', 'edit', item.id]);
  }

}
