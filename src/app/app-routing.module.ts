import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './components/parts/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/parts/map/map.component';

import { TradingViewComponent } from './components/charts/trading-view/trading-view.component';
import { AlphaBar2Component } from './components/charts/alpha-bar/alpha-bar2.component';
import { BarComponent } from './components/charts/bar/bar.component';
import { PolarComponent } from './components/charts/polar/polar.component';
import { BubbleComponent } from './components/charts/bubble/bubble.component';
import { CandleComponent } from './components/charts/candle/candle.component';

import { CatalogComponent } from './components/catalog/catalog.component';
import { OhlcComponent } from './components/charts/ohlc/ohlc.component';
import { Ohlc2Component } from './components/charts/ohlc/ohlc2/ohlc2.component';
import { ApexCandlestickComponent } from './components/charts/apex-candlestick/apex-candlestick.component';
import { BarWithSearchComponent } from './components/charts/bar-with-search/bar-with-search.component';
import { ApexBarComponent } from './components/charts/bar/apex-bar/apex-bar.component';

const routes: Routes = [

  //catalog
  { path: 'catalog', component: CatalogComponent },

  //charts
  { path: 'trade', component: TradingViewComponent}, //chart in catalog
  { path: 'alpha', component: AlphaBar2Component }, //chart in catalog
  { path: 'bar', component: ApexBarComponent }, //chart in catalog
  { path: 'bar-with-search', component: BarWithSearchComponent }, //chart in catalog
  { path: 'polar', component: PolarComponent }, //chart in catalog
  { path: 'bubble', component: BubbleComponent }, //chart in catalog
  { path: 'candle', component: ApexCandlestickComponent }, //chart in catalog
  { path: 'ohlc', component: OhlcComponent},

  //sandbox

  //home component and its parts
  { path: '', component: HomeComponent},
  { path: 'carousel', component: CarouselComponent},
  { path: 'map', component: MapComponent},

  { path: '**', redirectTo: "", pathMatch: 'full'},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
