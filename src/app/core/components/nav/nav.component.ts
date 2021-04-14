import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  /**
   * Property to know if the user is logged in (= present in local storage)
   */
  public isLoggedIn!: boolean;

  constructor(private ls: LoginService) {
    this.isLoggedIn = this.ls.isLoggedIn();
    console.log("Nav contructor : " + this.isLoggedIn);
  }

  ngOnInit(): void {
    this.isLoggedIn = this.ls.isLoggedIn();
    console.log("Nav ngOnInit : " + this.isLoggedIn);
  }

  /*public isUserLoggedIn() {
    this.isLoggedIn = this.ls.isLoggedIn();
    console.log("isUserLoggedIn : " + this.isLoggedIn);
  }*/

  public logout() {
    console.log("Nav logout");
    this.ls.logout();
    this.isLoggedIn = this.ls.isLoggedIn();
  }

}
