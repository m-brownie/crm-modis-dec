import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlApi = environment.urlApi;

  constructor(private http: HttpClient,
              private router: Router) { }

  // Enregistrer un compte
  public signUp(item: User): Observable<User> {
    console.log(item.id);
    return this.http.post<User>(`${this.urlApi}/users`, item);
  }

  // Se connecter
  public signIn(item: User): Observable<User[]> {

    const res = this.getUserByEmail(item.email);

    res.subscribe((res) => {

      const user = res[0];

      // Pseudo vérification de sécurité des infos de connexion
      if (user.password === item.password) {
        localStorage.setItem("user", user.email);
      }
    });

    // Juste pour les besoins de logs dans page-sign-in.components.ts
    return res;
  }

  // Se déconnecter
  public logout() {

    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");
    }

    this.router.navigate(['login']);
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

  private getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.urlApi}/users?email=${email}`);
  }

}
