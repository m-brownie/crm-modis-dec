import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlApi = environment.urlApi;

  private userByEmail!: Observable<User[]>;

  constructor(private http: HttpClient) { }

  // Enregistrer un compte
  public signUp(item: User): Observable<User> {
    console.log(item.id);
    return this.http.post<User>(`${this.urlApi}/users`, item);
  }

  // Se connecter
  public signIn(item: User): Observable<User[]> {
    return this.http.get<User[]>(`${this.urlApi}/users?email=${item.email}`);
  }

  public getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.urlApi}/users?email=${email}`);
  }

  public mustMatch(controlName: string, matchingControlName: string) {

    return (formGroup: FormGroup) => {

      let control = formGroup.controls[controlName];
      let matchingControl = formGroup.controls[matchingControlName];

      if (
        matchingControl.errors &&
        !matchingControl.errors.confirmPasswordValidator
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmPasswordValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

}
