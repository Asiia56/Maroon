import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TradingViewComponent } from './components/charts/trading-view/trading-view.component';
import { AlphaBar2Component } from './components/charts/alpha-bar/alpha-bar2.component';
import { PolarComponent } from './components/charts/polar/polar.component';
import { BubbleComponent } from './components/charts/bubble/bubble.component';

import { CatalogComponent } from './components/catalog/catalog.component';
import { OhlcComponent } from './components/charts/ohlc/ohlc.component';
import { BarComponent } from './components/charts/bar/bar.component';

const routes: Routes = [

  //catalog
  { path: 'catalog', component: CatalogComponent },

  //charts
  { path: 'trade', component: TradingViewComponent }, //chart in catalog
  { path: 'alpha', component: AlphaBar2Component }, //chart in catalog
  { path: 'bar', component: BarComponent }, //chart in catalog
  { path: 'polar', component: PolarComponent }, //chart in catalog
  { path: 'bubble', component: BubbleComponent }, //chart in catalog
  { path: 'ohlc', component: OhlcComponent },

  { path: 'candle', loadChildren: () => import('./components/charts/candlestick/candlestick.module').then(m => m.CandlestickModule) },
  { path: 'add-options', loadChildren: () => import('./components/charts/add-options-bar/add-options-bar.module').then(m => m.AddOptionsBarModule) },
  { path: '', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },

  { path: '**', redirectTo: "", pathMatch: 'full' },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
