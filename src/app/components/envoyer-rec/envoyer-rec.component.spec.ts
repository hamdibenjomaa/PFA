import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoyerRecComponent } from './envoyer-rec.component';

describe('EnvoyerRecComponent', () => {
  let component: EnvoyerRecComponent;
  let fixture: ComponentFixture<EnvoyerRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvoyerRecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoyerRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
