import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'collapsible-item-tester';
  items: Array<any> = [
    {
      id: 1,
      name: 'Vasilii Ivanov',
      age: 18,
      country: 'Russia',
      score: '50%'
  }, {
      id: 2,
      name: 'Ivan Vasilev',
      age: 20,
      country: 'Russia',
      score: '70%'
  }, {
      id: 3,
      name: 'Petr Petrov',
      age: 21,
      country: 'Russia',
      score: '90%'
  }];
}
