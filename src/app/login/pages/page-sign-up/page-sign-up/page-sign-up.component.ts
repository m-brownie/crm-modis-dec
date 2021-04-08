import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-page-sign-up',
  templateUrl: './page-sign-up.component.html',
  styleUrls: ['./page-sign-up.component.scss']
})
export class PageSignUpComponent implements OnInit {

  constructor(private ls: LoginService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public signup(item: User): void {
    console.log(item.email)
    this.ls.signUp(item).subscribe((res) => {
      console.log(res);
      this.router.navigate(['login']);
    });
  }

}
