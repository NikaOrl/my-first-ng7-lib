## Short content in the header section and long in the body

### Tempalte for this example looks like code below

```
<style>
p {
  font-family: sans-serif;
  font-size: 16px;
}

.elements-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.brd {
  border: 2px solid rgba(36, 35, 35, 0.418);
  border-radius: 8px;
  margin: 10px;
 }
 </style>
<div class="elements-list">
  <enl-nx-collapsible-item
    *ngFor="let item of items"
    [item]="item"
    class="brd"
  >
      <div collapsible-item-header>
        <p>{{ item.id }}. {{item.name}}</p>
      </div>
      <div collapsible-item-body>
        <p>Age: {{item.age}}</p>
        <p>Country: {{item.country}}</p>
        <p>Score: {{item.score}}</p>
      </div>
  </enl-nx-collapsible-item>
</div>

```
#### Example of items for this template

```
[    
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
  }
]
  ```
