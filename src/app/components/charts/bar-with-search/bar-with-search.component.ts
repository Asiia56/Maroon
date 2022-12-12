import { Component, OnInit } from '@angular/core';
import { AlphaApiService } from 'src/app/services/alpha-api.service';
import { Chart } from 'chart.js';
import { Observable } from 'rxjs';
import { DataTesco } from 'src/app/services/data.model';


@Component({
  selector: 'app-bar-with-search',
  templateUrl: './bar-with-search.component.html',
  styleUrls: ['./bar-with-search.component.scss', '../trading-view/trading-view.component.scss']
})
export class BarWithSearchComponent implements OnInit {

  public chart: any;
  data$: Observable<DataTesco[]>;
  data: DataTesco[] = [];

  lineData$ = [];
  barData$ = [];
  dailyData = [];
  lineCount: number;
  searchResultsBar = [];
  keyword: string = '';

  constructor(private service: AlphaApiService) { }

  ngOnInit(): void {

  }

  onKeyup(key: Array<any>) {
    this.keyword += key["key"];
    this.service.search(this.keyword).subscribe(data => {
      let searchdata: [] = data["bestMatches"];
      for (let i = 0; i < searchdata.length; i++) {
        this.searchResultsBar.push({
          symbol: searchdata[i]["1. symbol"],
          name: searchdata[i]["2. name"]
        })
      }
    })
  }

  loadData(event: Array<any>) {
    let line: number[] = [];
    let bar: number[]  = [];
    let dateLabels: string[] = [];

    this.service.daily(event['srcElement']['value']).subscribe(data => {
      dateLabels = Object.keys(data["Time Series (Daily)"]);
      let dataSource = Object.keys(data["Time Series (Daily)"]).map(e => data["Time Series (Daily)"][e]);
      dataSource.forEach(function (day) {
        line.unshift(day["2. high"]);
        bar.unshift(day["3. low"]);
      })
      this.timeframes[7] = { id: 7, timeframe: this.lineCount, label: 'Max', selected: true };
      this.createChart(dateLabels, line, bar);
    });
  }


  createChart(labels: string[], line: number[], bar: number[] ) {
    this.chart = new Chart("barSearchChart", {
      type: 'line',
      data: {//values on X-axis
        labels: labels.reverse(),
        datasets: [
          {//first column
            label: "High",
            data: line,
            type: 'line'
          },
          {//second column
            label: "Low",
            data: bar,
            type: 'line',
          },
        ]
      },
      options: {
        aspectRatio: 2,
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          y: {
            beginAtZero: false
          }
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Comparison of lowest and highest price',
            color: "#333",
            padding: 20
          }
        },
      }
    })
    // this.chart.canvas.parentNode.style.height = '540px';
  }

  onTimeChange(timeframe: number) {
    /*
    let dates = [];
    let line = [];
    let bar = [];

    for (let i = 0; i <= timeframe; i++) {
      dates.unshift(this.date$[this.lineCount - i]);
      line.unshift(this.lineData$[this.lineCount - i]);
      bar.unshift(this.barData$[this.lineCount - i]);
    }
*/
    // this.chartData[0].data = line;
    // this.chartData[1].data = bar;
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
