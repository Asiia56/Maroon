import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AlphaApiService } from 'src/app/services/alpha-api.service';
import { Observable } from 'rxjs';
import { DataTesco } from '../../../services/data.model';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss', '../trading-view/trading-view.component.scss']
})

export class BubbleComponent implements OnInit {

  constructor(public service: AlphaApiService) { }

  public chart: any;
  data$: Observable<DataTesco[]>;
  data: DataTesco[] = [];
  dateLabels$;
  bubbleData = [];

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.data$ = this.service.dailyTest(); //refer to api and receive all info as observable
    this.data$.subscribe(data => { //as i cannot manipulate observables directly, i subscribe
      this.data = Object.keys(data["Time Series (Daily)"]).map(e => data["Time Series (Daily)"][e]);
      //I receive data as object of objects. Object isnot iterable, so I should refers to keys and iterate through it
      this.dateLabels$ = Object.keys(data["Time Series (Daily)"]);
      this.createChart();
    });
  }

  createChart() {
    this.chart = new Chart("bubbleChart", {
      type: 'bubble',
      data: {
        labels: this.dateLabels$,
        datasets: [{
          data: this.data.map(row => ({
            x: row['1. open'],
            y: row['4. close'],
            r: (row['6. volume'] as number / 1000000),
          })),
          label: "Series"
        }
        ]
      },
      options: {
        aspectRatio: 2,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      }
    }
    )
  }
  /*
  for future search and time frimes

  getData(event: Array<any>) {
   if(this.chart) {
    this.chart.destroy();
   }
    this.service.daily(event['srcElement']['value']).subscribe(data => { //as i cannot manipulate observables directly, i subscribe
      this.data = Object.keys(data["Time Series (Daily)"]).map(e => data["Time Series (Daily)"][e]);
      //I receive data as object of objects. Object isnot iterable, so I should refers to keys and iterate through it
      this.dateLabels$ = Object.keys(data["Time Series (Daily)"]);
      this.lineCount = this.data.map(row => row['1. open']).length - 1;
      this.timeframes[7] = { id: 7, timeframe: this.lineCount, label: 'Max', selected: true };
      this.createChart();
    });
  }


  onTimeChange(timeframe: number) {

    let dates: number;

    for (let i = 0; i <= timeframe; i++) {
      this.service.daily(event['srcElement']['value']).subscribe(data => {
        this.data = Object.keys(data["Time Series (Daily)"]).map(e => data["Time Series (Daily)"][e]);
        dates = this.data.unshift(this.data[this.lineCount - i]);
        this.dateLabels$ = Object.keys(data["Time Series (Daily)"]);
        this.lineCount = this.data.map(row => row['1. open']).length - 1;
        this.timeframes[7] = { id: 7, timeframe: this.lineCount, label: 'Max', selected: true };
        this.createChart();
      });

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
   */
}
