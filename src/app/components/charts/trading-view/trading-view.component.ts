import { Component, OnInit } from '@angular/core';
import { ITradingViewWidget, Themes } from 'tradingview-widget';

@Component({
  selector: 'app-trading-view',
  templateUrl: './trading-view.component.html',
  styleUrls: ['./trading-view.component.scss']
})
export class TradingViewComponent implements OnInit {

  widgetConfig: ITradingViewWidget = {
    symbol: 'MSFT',
    widgetType: 'widget',
    allow_symbol_change: true,
    height: 540,
    width: '100%',
    hideideas: true,
    hide_legend: false,
    hide_side_toolbar: true,
    hide_top_toolbar: false,
    theme: Themes.LIGHT,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
