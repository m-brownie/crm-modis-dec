import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from 'src/app/core/services/clients.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {

  public client = new Client();

  constructor(private router: Router,
              private cs: ClientsService) { }

  ngOnInit(): void {
  }

  public add(item: Client): void {
    this.cs.add(item).subscribe((res) => {
      console.log(res);
      this.router.navigate(['clients']);
    });
  }

}
