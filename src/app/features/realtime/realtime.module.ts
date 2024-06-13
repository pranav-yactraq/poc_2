import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealtimeComponent } from './realtime/realtime.component';
import { RealtimeRoutingModule } from './realtime-routing/realtime-routing.module';



@NgModule({
  declarations: [
    RealtimeComponent
  ],
  imports: [
    CommonModule,
    RealtimeRoutingModule
  ],
})
export class RealtimeModule { }
