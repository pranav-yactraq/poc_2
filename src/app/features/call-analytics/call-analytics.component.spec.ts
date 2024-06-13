import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallAnalyticsComponent } from './call-analytics.component';

describe('CallAnalyticsComponent', () => {
  let component: CallAnalyticsComponent;
  let fixture: ComponentFixture<CallAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallAnalyticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
