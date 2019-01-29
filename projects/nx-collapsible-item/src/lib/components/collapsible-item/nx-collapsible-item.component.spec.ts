import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxCollapsibleItemComponent } from './nx-collapsible-item.component';

describe('NxCollapsibleItemComponent', () => {
  let component: NxCollapsibleItemComponent;
  let fixture: ComponentFixture<NxCollapsibleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxCollapsibleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxCollapsibleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
