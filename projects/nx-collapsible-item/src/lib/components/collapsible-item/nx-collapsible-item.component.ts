import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'enl-nx-collapsible-item',
  templateUrl: './nx-collapsible-item.component.html',
  styleUrls: ['nx-collapsible-item.component.css']
})
export class NxCollapsibleItemComponent implements OnInit {
  public isCollapsed = false;

  constructor() {}

  ngOnInit() {}

  collapse() {
    this.isCollapsed = true;
  }

  expand() {
    this.isCollapsed = false;
  }
}
