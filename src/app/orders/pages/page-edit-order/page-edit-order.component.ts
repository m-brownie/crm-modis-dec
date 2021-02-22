import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {

  public item$!: Observable<Order>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private os: OrdersService) { }

  ngOnInit(): void {

    this.item$ = this.route.paramMap.pipe(
      switchMap(params => {
        const selectedId = (params.get('id')!);
        return this.os.getItemById(selectedId);
      })
    );
  }

public edit(item: Order): void {
  this.os.update(item).subscribe((res) => {
    this.router.navigate(['orders']);
  });
}

}
