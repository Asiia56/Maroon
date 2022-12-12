import { Component, OnInit } from '@angular/core';
import { AlphaApiService } from 'src/app/services/alpha-api.service';
import { Chart } from 'chart.js';
import { Observable } from 'rxjs';
import { DataTesco } from 'src/app/services/data.model';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss', '../trading-view/trading-view.component.scss']
})


export class BarComponent implements OnInit {

  public chart: any;
  data$: Observable<DataTesco[]>;
  data: DataTesco[] = [];
  dateLabels;
  lineData$ = [];
  barData$ = [];

  constructor(private service: AlphaApiService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    let line = [];
    let bar = [];
    this.data$ = this.service.dailyTest();
    this.data$.subscribe(data => {
      let dataS = Object.keys(data["Time Series (Daily)"]).map(e => data["Time Series (Daily)"][e]);;
      this.dateLabels = Object.keys(data["Time Series (Daily)"]);
      dataS.forEach(function (day) {
        line.unshift(day["2. high"]);
        bar.unshift(day["3. low"]);
      })
      this.lineData$ = line;
      this.barData$ = bar;
      this.createChart();
    });
  }

  createChart() {
    this.chart = new Chart("barChart", {
      type: 'line',
      data: {//values on X-axis
        labels: this.dateLabels,//.reverse()
        datasets: [
          {//first column
            label: "High",
            data: this.lineData$,
            borderColor: 'black',
            type: 'line'
          },
          {//second column
            label: "Low",
            data: this.barData$,
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
}

