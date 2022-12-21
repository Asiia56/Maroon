import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApexCandlestickSubjectComponent } from './apex-candlestick-subject/apex-candlestick-subject.component';
import { ApexCandlestickWasComponent } from './apex-candlestick-was/apex-candlestick-was.component';
import { ApexCandlestickComponent } from './apex-candlestick/apex-candlestick.component';

const routes: Routes = [
  { path: 'was', component: ApexCandlestickWasComponent },
  { path: 'subject', component: ApexCandlestickSubjectComponent },
  { path: '', component: ApexCandlestickComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandlestickRoutingModule { }
