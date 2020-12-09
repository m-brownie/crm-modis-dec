import { Component, OnInit } from '@angular/core';

/**
 * User interface
 */
@Component({
  selector: 'app-ui2',
  templateUrl: './ui2.component.html',
  styleUrls: ['./ui2.component.scss']
})
export class Ui2Component implements OnInit {

  /**
   * Property used to open/close the nav menu
   */
  public open: boolean;

  constructor() {
    this.open = true;
  }

  ngOnInit(): void {
  }

  /**
   * Function to open/close the nav menu
   * @example
   * (click)="toggle()"
   */
  public toggle(): void {
    this.open = !this.open;
  }

}
