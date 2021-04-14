import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlApi = environment.urlApi;

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private http: HttpClient,
              private router: Router) {

    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  // Enregistrer un compte
  public signUp(item: User): Observable<User> {
    return this.http.post<User>(`${this.urlApi}/users`, item);
  }

  // Login
  public login(item: User): Observable<User> {

    return this.getUserByEmail(item.email).pipe(
      map(user => {
        localStorage.setItem('user', JSON.stringify(user[0]));
        this.userSubject.next(user[0]);
        return user[0]
      })
    );
  }

  // Se connecter
  public loginOld(item: User): Observable<User[]> {

    const res = this.getUserByEmail(item.email);

    res.subscribe((res) => {

      const user = res[0];

      // Pseudo vérification de sécurité des infos de connexion
      if (user.password === item.password) {
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
      }
    });

    // Juste pour les besoins de logs dans page-sign-in.components.ts
    return res;
  }

  // Se déconnecter
  public logout() {

    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['login']);
  }

  // Si un utilisateur est présent dans le local storage on le considère comme connecté
  public isLoggedIn(): boolean {
    return localStorage.getItem('user') !== null;
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
