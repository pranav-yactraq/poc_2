import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealtimeComponent } from '../realtime/realtime.component';

const routes: Routes = [
  { path: '', component: RealtimeComponent }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealtimeRoutingModule { }
