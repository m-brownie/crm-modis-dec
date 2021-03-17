import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) { }

  // Enregistrer un compte
  public signUp() {

  }

  // Se connecter
  public signIn(item: User): Observable<User> {
    return this.http.get<User>(`${this.urlApi}/users/${item.email}`);
  }
}
