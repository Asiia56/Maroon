import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddOptionsRoutingModule } from './add-options-bar-routing.module';
import { TypeChangeComponent } from './type-change/type-change.component';
import { CompanyChangeComponent } from './company-change/company-change.component';
import { MaterialExampleModule } from 'src/app/material.module';
import { AddOptionsBarComponent } from './add-options-bar.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    TypeChangeComponent,
    CompanyChangeComponent,
    AddOptionsBarComponent
  ],
  imports: [
    CommonModule,
    MaterialExampleModule,
    AddOptionsRoutingModule,
    NgApexchartsModule
  ]
})
export class AddOptionsBarModule { }
