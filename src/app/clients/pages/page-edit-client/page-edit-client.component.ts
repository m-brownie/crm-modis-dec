import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from 'src/app/core/services/clients.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent implements OnInit {

  public item$!: Observable<Client>;

  constructor(private cs: ClientsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.item$ = this.route.paramMap.pipe(
      switchMap(params => {
        const selectedId = (params.get('id')!);
        return this.cs.getItemById(selectedId);
      })
    );
  }

  public edit(item: Client): void {

    this.cs.update(item).subscribe((res) => {
      this.router.navigate(['clients']);
    });
  }

}
