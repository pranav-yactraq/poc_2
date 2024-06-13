import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseReportsPageComponent } from './phrase-reports-page.component';

describe('PhraseReportsPageComponent', () => {
  let component: PhraseReportsPageComponent;
  let fixture: ComponentFixture<PhraseReportsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhraseReportsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhraseReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
