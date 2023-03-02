import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatedComponent } from './simulated.component';

describe('SimulatedComponent', () => {
  let component: SimulatedComponent;
  let fixture: ComponentFixture<SimulatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
