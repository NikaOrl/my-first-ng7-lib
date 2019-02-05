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

 .btn {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: block;
  margin: 8px auto;
  font-size: 16px;
  cursor: pointer;
}
 </style>
<div class="elements-list">
  <enl-nx-collapsible-item
    class="brd"
  >
      <div collapsible-item-header>
        <p> Header content </p>
      </div>
      <div collapsible-item-body>
        <p> Body content </p>
        <img alt="some img"/>
        <p> Body content </p>
        <button class="btn">Click me!</button>
      </div>
  </enl-nx-collapsible-item>
</div>

```
