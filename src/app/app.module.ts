import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialExampleModule } from './material.module';
import { NgChartsModule } from 'ng2-charts';
import { HomeComponent } from './components/home/home.component';
import { TradingviewWidgetModule } from 'projects/tradingview-widget/src/public-api';
import { CarouselComponent } from './components/parts/carousel/carousel.component';
import { MapComponent } from './components/parts/map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from "ng-apexcharts";
import { CatalogComponent } from './components/catalog/catalog.component';

//charts
import { TradingViewComponent } from './components/charts/trading-view/trading-view.component';
import { AlphaBar2Component } from './components/charts/alpha-bar/alpha-bar2.component';
import { BarComponent } from './components/charts/bar/bar.component';
import { PolarComponent } from './components/charts/polar/polar.component';
import { BubbleComponent } from './components/charts/bubble/bubble.component';
import { CandleComponent } from './components/charts/candle/candle.component';
import { OhlcComponent } from './components/charts/ohlc/ohlc.component';
import { Ohlc2Component } from './components/charts/ohlc/ohlc2/ohlc2.component';
import { ApexCandlestickComponent } from './components/charts/apex-candlestick/apex-candlestick.component';
import { ApexBarComponent } from './components/charts/bar/apex-bar/apex-bar.component';
import { ApexPolarComponent } from './components/charts/polar/apex-polar/apex-polar.component';
import { BarWithSearchComponent } from './components/charts/bar-with-search/bar-with-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TradingViewComponent,
    CarouselComponent,
    MapComponent,
    AlphaBar2Component,
    BarComponent,
    PolarComponent,
    CatalogComponent,
    BubbleComponent,
    CandleComponent,
    OhlcComponent,
    Ohlc2Component,
    ApexCandlestickComponent,
    ApexBarComponent,
    ApexPolarComponent,
    BarWithSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialExampleModule,
    NgChartsModule,
    TradingviewWidgetModule,
    GoogleMapsModule,
    HttpClientModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
