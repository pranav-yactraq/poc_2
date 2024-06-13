import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallAnalyticsComponent } from './call-analytics.component';
import { CallAnalyticsRoutingModule } from './call-analytics-routing/call-analytics-routing.module';
import { CallScoringComponent } from './call-scoring/call-scoring.component';
import { CallAtmosphereComponent } from './call-atmosphere/call-atmosphere.component';



@NgModule({
  declarations: [
    CallAnalyticsComponent,
    CallScoringComponent,
    CallAtmosphereComponent
  ],
  imports: [
    CommonModule,
    CallAnalyticsRoutingModule
  ],
  bootstrap: [CallAnalyticsComponent]
})
export class CallAnalyticsModule { }
