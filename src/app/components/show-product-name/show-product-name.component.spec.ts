import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductNameComponent } from './show-product-name.component';

describe('ShowProductNameComponent', () => {
  let component: ShowProductNameComponent;
  let fixture: ComponentFixture<ShowProductNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProductNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProductNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
