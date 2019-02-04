## Project setup

```
npm i nx-collapsible-item
```

## Basic usage example

### Add module into your app

```
@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxCollapsibleItemModule,
  ],
})
export class AppModule {
}

```

### Add murkup to the template file

```
<enl-nx-collapsible-item>
  <div collapsible-item-header>
    header content goes here
  </div>
  <div collapsible-item-body>
    body content goes here
  </div>
</enl-nx-collapsible-item>
```

### Tempalte for this example looks like code below

```
<style>
p \{
  font-family: sans-serif;
  font-size: 16px;
\}

.elements-list \{
  display: flex;
  flex-direction: column;
  align-items: center;
\}

.brd \{
  border: 2px solid rgba(36, 35, 35, 0.418);
  border-radius: 8px;
  margin: 10px;
 \}
 </style>
 <div class="elements-list">
  <enl-nx-collapsible-item
    class="brd"
  >
      <div collapsible-item-header>
        content for header section
      </div>
      <div collapsible-item-body>
        content for body section
      </div>
  </enl-nx-collapsible-item>
</div>

```
