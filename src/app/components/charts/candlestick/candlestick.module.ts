import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandlestickRoutingModule } from './candlestick-routing.module';
import { ApexCandlestickComponent } from './apex-candlestick/apex-candlestick.component';
import { ApexCandlestickWasComponent } from './apex-candlestick-was/apex-candlestick-was.component';
import { ApexCandlestickSubjectComponent } from './apex-candlestick-subject/apex-candlestick-subject.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    ApexCandlestickComponent,
    ApexCandlestickWasComponent,
    ApexCandlestickSubjectComponent
  ],
  imports: [
    CommonModule,
    CandlestickRoutingModule,
    NgApexchartsModule
  ]
})
export class CandlestickModule { }
