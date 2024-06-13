import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhraseReportsPageComponent } from '../phrase-reports-page/phrase-reports-page.component';
const routes: Routes = [
  {
    path: '', component: PhraseReportsPageComponent, pathMatch: 'full'
  },

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PhraseReportsRoutingModule { }
