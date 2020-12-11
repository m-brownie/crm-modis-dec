import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateClient } from '../enums/state-client.enum';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

    // Property collection
    public pCollection$!: Observable<Client[]>;

    private urlApi = environment.urlApi;

    constructor(private http: HttpClient) {
      // Appel implicite de la méthode "set collection" un peu plus bas
      this.collection = http.get<Client[]>(`${this.urlApi}/clients`);
    }

    // Get collection
    get collection(): Observable<Client[]> {
      return this.pCollection$;
    }

    // Set collection
    set collection(col: Observable<Client[]>) {
      this.pCollection$ = col;
    }

    // Change item state
    public changeState(item: Client, state: StateClient): Observable<Client> {

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
    public update(item: Client): Observable<Client> {
      return this.http.put<Client>(`${this.urlApi}/clients/${item.id}`, item);
    }

    // Add item in collection

    // Delete item

    // Get item by id from collection
}
