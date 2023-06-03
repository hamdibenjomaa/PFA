import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationsEnvoyeesComponent } from './reclamations-envoyees.component';

describe('ReclamationsEnvoyeesComponent', () => {
  let component: ReclamationsEnvoyeesComponent;
  let fixture: ComponentFixture<ReclamationsEnvoyeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationsEnvoyeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationsEnvoyeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
