import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenOrderTicketsComponent } from './kitchen-order-tickets.component';

describe('KitchenOrderTicketsComponent', () => {
  let component: KitchenOrderTicketsComponent;
  let fixture: ComponentFixture<KitchenOrderTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KitchenOrderTicketsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenOrderTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
