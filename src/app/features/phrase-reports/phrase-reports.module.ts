import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhraseReportsComponent } from './phrase-reports/phrase-reports.component';
import { PhraseOccurenceReportComponent } from './phrase-occurence-report/phrase-occurence-report.component';
import { PhraseReportsRoutingModule } from './phrase-reports-routing/phrase-reports-routing.module';
import { PhraseReportsPageComponent } from './phrase-reports-page/phrase-reports-page.component';



@NgModule({
  declarations: [
    PhraseReportsComponent,
    PhraseOccurenceReportComponent,
    PhraseReportsPageComponent
  ],
  imports: [
    CommonModule,
    PhraseReportsRoutingModule
  ]
})
export class PhraseReportsModule { }
