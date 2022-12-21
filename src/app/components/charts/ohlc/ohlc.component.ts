import { Component, OnInit } from '@angular/core';
import { AlphaApiService } from 'src/app/services/alpha-api.service';
import { Observable } from 'rxjs';
import { Chart } from 'chart.js';
import { DataTesco } from 'src/app/services/data.model';

@Component({
  selector: 'app-ohlc',
  templateUrl: './ohlc.component.html',
  styleUrls: ['./ohlc.component.scss', '../trading-view/trading-view.component.scss']
})
export class OhlcComponent implements OnInit {

  public chart;
  data$: Observable<DataTesco[]>;
  data: DataTesco[] = [];
  dateLabels$;

  constructor(private service: AlphaApiService) { }

  ngOnInit(): void {
//    this.getData();
  }
/*
  getData() {
    this.data$ = this.service.dailyTest(); //refer to api and receive all info as observable
    this.data$.subscribe(data => { //as i cannot manipulate observables directly, i subscribe
      this.data = Object.keys(data["Time Series (Daily)"]).map(e => data["Time Series (Daily)"][e]);
      this.dateLabels$ = Object.keys(data["Time Series (Daily)"]);
      this.createChart();
    });
  }

  createChart() {
    this.chart = new Chart("ohlcChart", {
      type: 'bar',
      data: {//values on X-axis
        labels: this.dateLabels$.reverse(),
        datasets: [
          {//first line above
            label: "Close day",
            data: this.data.map(row => row['4. close']),
            type: 'line',
            borderColor: '#2B3A55',
          },
          {//second column
            label: "Open day",
            data: this.data.map(row => row['1. open']),
            type: 'line',
            borderColor: '#F2E5E5',
          },
          {//left column
            label: "High price",
            data: this.data.map(row => row['2. high']),
            type: 'bar',
            backgroundColor: '#E8C4C4'
          },
          {//right column
            label: "Low price",
            data: this.data.map(row => row['3. low']),
            type: 'bar',
            backgroundColor: '#CE7777'
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
            text: 'OpenHighLowClose',
            color: "#333",
            padding: 20
          }
        },
      }
    })
    // this.chart.canvas.parentNode.style.height = '540px';
  }
*/
}
