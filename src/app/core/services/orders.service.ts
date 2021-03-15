import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateOrder } from '../enums/state-order.enum';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  // Property collection
  public pCollection$!: Observable<Order[]>;

  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    // Appel implicite de la méthode "set collection" un peu plus bas
    this.collection = http.get<Order[]>(`${this.urlApi}/orders`);
  }

  // Get collection
  get collection(): Observable<Order[]> {
    return this.pCollection$;
  }

  // Set collection
  set collection(col: Observable<Order[]>) {
    this.pCollection$ = col;
  }

  // Change item state
  public changeState(item: Order, state: StateOrder): Observable<Order> {

    // On fait une copie de item pour la modifier en BDD
    // et SEULEMENT APRES on modifie item dans le front
    // Il faut un nouvel objet avec nouvelle référence.
    // const obj = item; => même référence,
    // donc on utilise {...item} pour créer une nouvelle référence,
    // mais avec toutes les propriétés et valeurs de item
    const obj = {...item};
    obj.state = state;

    return this.update(obj);
  }

  // Update item in collection
  public update(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item);
  }

  // Add item in collection
  public add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}/orders`, item);
  }

  // Delete item
  public delete(item: Order): Observable<Order> {
    return this.http.delete<Order>(`${this.urlApi}/orders/${item.id}`);
  }

  // Get item by id from collection
  public getItemById(id: string): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}/orders/${id}`);
  }

  // Get item by name
  public getItemByClientName(clientName: string): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}/orders?client=${clientName}`);
  }
}
