import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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

  // Update item in collection

  // Add item in collection

  // Delete item

  // Get item by id from collection
}
