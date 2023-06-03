import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraiterRecComponent } from './traiter-rec.component';

describe('TraiterRecComponent', () => {
  let component: TraiterRecComponent;
  let fixture: ComponentFixture<TraiterRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraiterRecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraiterRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
