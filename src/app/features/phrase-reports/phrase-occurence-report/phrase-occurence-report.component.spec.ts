import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseOccurenceReportComponent } from './phrase-occurence-report.component';

describe('PhraseOccurenceReportComponent', () => {
  let component: PhraseOccurenceReportComponent;
  let fixture: ComponentFixture<PhraseOccurenceReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhraseOccurenceReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhraseOccurenceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
