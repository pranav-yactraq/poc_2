import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallAtmosphereComponent } from '../call-atmosphere/call-atmosphere.component';
import { CallScoringComponent } from '../call-scoring/call-scoring.component';



const routes: Routes = [
  { path: 'callSummary', component: CallScoringComponent },
  { path: 'callAtmosphere', component: CallAtmosphereComponent },
  { path: '', redirectTo: 'callSummary', pathMatch: 'full' },
  { path: '**', redirectTo: 'callSummary', pathMatch: 'full' },

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CallAnalyticsRoutingModule { }
