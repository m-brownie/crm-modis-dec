import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-page-sign-in',
  templateUrl: './page-sign-in.component.html',
  styleUrls: ['./page-sign-in.component.scss']
})
export class PageSignInComponent implements OnInit {

  constructor(private ls: LoginService,
              private router: Router) {

    if(this.ls.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
  }

  public connect(item: User): void {

    this.ls.login(item).subscribe((res) => {
      // On redirige vers la page Home
      this.router.navigate(['/'])
    });
  }

}
