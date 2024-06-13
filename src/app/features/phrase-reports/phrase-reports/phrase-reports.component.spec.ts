import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseReportsComponent } from './phrase-reports.component';

describe('PhraseReportsComponent', () => {
  let component: PhraseReportsComponent;
  let fixture: ComponentFixture<PhraseReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhraseReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhraseReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
