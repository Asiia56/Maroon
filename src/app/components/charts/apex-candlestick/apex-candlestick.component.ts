import { Component, ViewChild, OnInit } from "@angular/core";
import { Observable } from 'rxjs';

import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexYAxis, ApexXAxis, ApexTitleSubtitle } from "ng-apexcharts";
import { parseISO } from 'date-fns';
import { DataTesco } from "src/app/services/data.model";
import { AlphaApiService } from "src/app/services/alpha-api.service";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-apex-candlestick',
  templateUrl: './apex-candlestick.component.html',
  styleUrls: ['./apex-candlestick.component.scss', '../trading-view/trading-view.component.scss']
})

export class ApexCandlestickComponent implements OnInit {

  @ViewChild("chart", { static: false }) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  fileOnLoad:boolean = false;

  ngOnInit(): void {
    this.getData();
  }

  data$: Observable<DataTesco[]>;
  series = [];

  getData() {
    let open = [];
    let close = [];
    let high = [];
    let low = [];
    let arrFinal = [];

    this.data$ = this.service.dailyTest();
    this.data$.subscribe(data => {
      let dataS = Object.keys(data["Time Series (Daily)"]).map(e => data["Time Series (Daily)"][e]);;
      let dateLabels$ = Object.keys(data["Time Series (Daily)"]).map(e => parseISO(e))
      dataS.forEach(function (day) {
        high.unshift(day["2. high"]);
        low.unshift(day["3. low"]);
        open.unshift(day["1. open"]);
        close.unshift(day["4. close"]);
      })

      let arrCollection = [open, high, low, close];

      for (let i = 0; i < open.length; i++) {
        var arr = [];
        arrCollection.forEach(function (a) {
          arr.push(a[i]);
        });
        arrFinal.push(arr);
      }

      for (let x = 0; x < arrFinal.length; x++) {
        this.series.push({
          x: dateLabels$[x],
          y: arrFinal[x]
        });
      }
      this.createChart();
    });
  }

  constructor(private service: AlphaApiService) {}

  createChart() {
    this.fileOnLoad = true; //is needed to prevent html load earsiler than ts receive data from api

    this.chartOptions = {
      series: [{
        data: this.series
      }],
      chart: {
        type: "candlestick",
      },

      title: {
        text: "CandleStick Chart",
        align: "left"
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      }
    };
  }
}
