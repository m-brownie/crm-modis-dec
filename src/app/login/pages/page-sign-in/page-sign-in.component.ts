import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-page-sign-in',
  templateUrl: './page-sign-in.component.html',
  styleUrls: ['./page-sign-in.component.scss']
})
export class PageSignInComponent implements OnInit {

  constructor(private ls: LoginService) { }

  ngOnInit(): void {
  }

  public connect(item: User):void {
    this.ls.signIn(item).subscribe((res) => {
      console.log(res);
    });
  }

}
