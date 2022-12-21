import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialExampleModule } from './material.module';
import { NgChartsModule } from 'ng2-charts';
import { TradingviewWidgetModule } from 'projects/tradingview-widget/src/public-api';
import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from "ng-apexcharts";
import { CatalogComponent } from './components/catalog/catalog.component';

//charts
import { TradingViewComponent } from './components/charts/trading-view/trading-view.component';
import { AlphaBar2Component } from './components/charts/alpha-bar/alpha-bar2.component';
import { BarComponent } from './components/charts/bar/bar.component';
import { PolarComponent } from './components/charts/polar/polar.component';
import { BubbleComponent } from './components/charts/bubble/bubble.component';
import { OhlcComponent } from './components/charts/ohlc/ohlc.component';
import { Ohlc2Component } from './components/charts/ohlc/ohlc2/ohlc2.component';
import { ApexBarComponent } from './components/charts/bar/apex-bar/apex-bar.component';
import { ApexPolarComponent } from './components/charts/polar/apex-polar/apex-polar.component';

@NgModule({
  declarations: [
    AppComponent,
    TradingViewComponent,
    AlphaBar2Component,
    BarComponent,
    PolarComponent,
    CatalogComponent,
    BubbleComponent,
    OhlcComponent,
    Ohlc2Component,
    ApexBarComponent,
    ApexPolarComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialExampleModule,
    NgChartsModule,
    TradingviewWidgetModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
