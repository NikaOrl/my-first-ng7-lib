import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enl-nx-collapsible-item',
  templateUrl: './nx-collapsible-item.component.html',
  styleUrls: ['nx-collapsible-item.component.css']
})
export class NxCollapsibleItemComponent implements OnInit {
  public itemId: number = 0;
  public isCollapsed:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  collapse() {
    this.isCollapsed = true;
  }

  expand() {
    this.isCollapsed = false;
  }
}
