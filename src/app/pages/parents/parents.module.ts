import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentsRoutingModule } from './parents-routing.module';
import { ParentsListComponent } from './parents-list/parents-list.component';
import { ParentsRegisterComponent } from './parents-register/parents-register.component';

@NgModule({
  imports: [
    CommonModule,
    ParentsRoutingModule
  ],
  declarations: [ParentsListComponent, ParentsRegisterComponent]
})
export class ParentsModule { }
