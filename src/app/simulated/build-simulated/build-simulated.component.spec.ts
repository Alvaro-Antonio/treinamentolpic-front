import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildSimulatedComponent } from './build-simulated.component';

describe('BuildSimulatedComponent', () => {
  let component: BuildSimulatedComponent;
  let fixture: ComponentFixture<BuildSimulatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildSimulatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildSimulatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
