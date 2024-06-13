import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallScoringComponent } from './call-scoring.component';

describe('CallScoringComponent', () => {
  let component: CallScoringComponent;
  let fixture: ComponentFixture<CallScoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallScoringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
