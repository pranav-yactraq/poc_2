import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { MainComponent } from '../main/main.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent, children:
      [
        { path: 'main', component: MainComponent },
        { path: 'call-analytics', loadChildren: () => import('../../features/call-analytics/call-analytics.module').then((m) => m.CallAnalyticsModule) },
        { path: 'realtime', loadChildren: () => import('../../features/realtime/realtime.module').then((m) => m.RealtimeModule) },
        { path: 'phrase-reports', loadChildren: () => import('../../features/phrase-reports/phrase-reports.module').then((m) => m.PhraseReportsModule) },
        { path: '', redirectTo: 'main', pathMatch: 'full' },
        { path: '**', redirectTo: 'main', pathMatch: 'full' }
      ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CoreRoutingModule { }
