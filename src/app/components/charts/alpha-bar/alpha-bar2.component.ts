import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { AlphaApiService } from 'src/app/services/alpha-api.service';

@Component({
  selector: 'app-alpha-bar2',
  templateUrl: './alpha-bar2.component.html',
  styleUrls: ['./alpha-bar2.component.scss', '../trading-view/trading-view.component.scss']
})

export class AlphaBar2Component implements OnInit {

  //public chart: any;
  date = [];
  lineData$ = [];
  barData$ = [];
  //ailyData = [];
  lineCount: number;
  searchResultsAlpha = [];
  keyword: string = '';
  barChartType: ChartType = 'line';

  constructor(public service: AlphaApiService) { }
  ngOnInit(): void {
    console.log('ngOnInit, lineData ', this.lineData$, 'and barData', this.barData$)
  }

  public chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          display: true
        }
      },
    }
  };

  public chartLabels = this.date;
  public chartLegend = true;
  public chartData: ChartDataset[] = [{ data: this.lineData$, label: 'High', type: 'line' },
  { data: this.barData$, label: 'Low', type: 'line' }];

  onKeyup(key: Array<any>) {
    console.log('onKeyup triggered')
    this.keyword += key["key"];
    this.service.search(this.keyword).subscribe(data => {
      let searchdata: [] = data["bestMatches"];
      for (let i = 0; i < searchdata.length; i++) {
        this.searchResultsAlpha.push({
          symbol: searchdata[i]["1. symbol"],
          name: searchdata[i]["2. name"]
        })
      }
    })
  }

  onChange(event: Array<any>) {
    let line = [];
    let bar = [];
    console.log('onChange triggered')

    this.service.daily(event['srcElement']['value']).subscribe(data => {
      this.date = Object.keys(data["Time Series (Daily)"]);
      this.chartLabels = this.date.reverse();
      let dailyData = Object.keys(data["Time Series (Daily)"])
      .map(e => data["Time Series (Daily)"][e]);
      dailyData.forEach(function (day) {
        line.unshift(day["2. high"]);
        bar.unshift(day["3. low"]);
      })
      this.chartData[0].data = line;
      this.chartData[1].data = bar;
      this.lineData$ = line;
      this.barData$ = bar;
      this.lineCount = line.length - 1;
      console.log('onChange, lineData ', this.lineData$, 'and barData', this.barData$)
      console.log('onChange, this.chartData[0].data ', this.chartData[0].data, 'and barData', this.chartData[1].data)

      this.timeframes[7] = { id: 7, timeframe: this.lineCount, label: 'Max', selected: true };
    });

  }

  onTimeChange(timeframe: number) {
    let dates = [];
    let line = [];
    let bar = [];
    console.log('onTimeChange triggered')

    for (let i = 0; i <= timeframe; i++) {
      dates.unshift(this.date[this.lineCount - i]);
      line.unshift(this.lineData$[this.lineCount - i]);
      bar.unshift(this.barData$[this.lineCount - i]);
    }
    this.chartLabels = dates;
    this.chartData[0].data = line;
    this.chartData[1].data = bar;
    console.log('onTimeChange, this.chartData[0].data ', this.chartData[0].data, 'and barData', this.chartData[1].data)

    console.log('onTimeChange, lineData ', this.lineData$, 'and barData', this.barData$)

  }

timeframes = [
    { id: 0, timeframe: 0, label: '1 Day', selected: false },
    { id: 1, timeframe: 4, label: '1 Week', selected: false },
    { id: 2, timeframe: 20, label: '1 Month', selected: false },
    { id: 3, timeframe: 62, label: '3 Months', selected: false },
    { id: 4, timeframe: 125, label: '6 Months', selected: false },
    { id: 5, timeframe: 251, label: '1 Year', selected: false },
    { id: 6, timeframe: 1288, label: '5 Years', selected: false },
    { id: 7, timeframe: undefined, label: 'Max', selected: false }
  ];


}
