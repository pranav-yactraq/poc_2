import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallAtmosphereComponent } from './call-atmosphere.component';

describe('CallAtmosphereComponent', () => {
  let component: CallAtmosphereComponent;
  let fixture: ComponentFixture<CallAtmosphereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallAtmosphereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallAtmosphereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
