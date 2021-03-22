import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-page-sign-up',
  templateUrl: './page-sign-up.component.html',
  styleUrls: ['./page-sign-up.component.scss']
})
export class PageSignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public signup(item: User): void {
    console.log("Signup");
  }

}
