import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { CoreRoutingModule } from './core-routing/core-routing.module';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    LayoutComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
})
export class CoreModule { }
