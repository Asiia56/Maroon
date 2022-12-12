import { Component, OnInit } from '@angular/core';
import { AlphaApiService } from 'src/app/services/alpha-api.service';
import { Chart } from 'chart.js';
import { Observable } from 'rxjs';
import { DataTesco } from '../../../services/data.model';

@Component({
  selector: 'app-polar',
  templateUrl: './polar.component.html',
  styleUrls: ['./polar.component.scss', '../trading-view/trading-view.component.scss']
})
export class PolarComponent implements OnInit {

  public chart: any;
  data$: Observable<DataTesco[]>;
  data: DataTesco[] = [];
  dateLabels$;
  bubbleData$ = [];

  constructor(public service: AlphaApiService) { }

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
    this.chart = new Chart("polarChart", {
      type: 'polarArea',
      data: {
        labels: this.dateLabels$,
        datasets: [{
          data: this.data.map(e => e['4. close'])
        }]
      },
      options: {
        scales: {},
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: '4. close',
            color: "#333",
            padding: 20
          }
        },
        aspectRatio: 1,
        maintainAspectRatio: false
      }
    });
  }
}
