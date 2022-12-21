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
  selector: 'app-apex-candlestick-was',
  templateUrl: './apex-candlestick-was.component.html',
  styleUrls: ['./apex-candlestick-was.component.scss']
})
export class ApexCandlestickWasComponent implements OnInit {

  @ViewChild("apexChartWas", { static: false }) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  fileOnLoad: boolean = false;

  ngOnInit(): void {
    this.getData(undefined);
  }

  public activeOptionButton = "all";
  data$: Observable<DataTesco[]>;
  series = [];

  getData(option) {
    let open = [];
    let close = [];
    let high = [];
    let low = [];
    let arrFinal = [];

    this.service.dailyAll().subscribe(data => {
      console.log('subscription created')
      let dataS = Object.keys(data["Time Series (Daily)"]).map(e => data["Time Series (Daily)"][e]);
      let dateLabels$ = Object.keys(data["Time Series (Daily)"]).map(e => parseISO(e))
      dataS.forEach(function (day) {
        high.unshift(day["2. high"]);
        low.unshift(day["3. low"]);
        open.unshift(day["1. open"]);
        close.unshift(day["4. close"]);
      })

      let arrCollection = [open, high, low, close];
      let lineLength = dateLabels$.length - 1;
      let optionLength = 21;

      if (option === '1m') {
        optionLength = 21;
      } else if (option === '6m') {
        optionLength = 126;
      } else if (option === '1y') {
        optionLength = 252;
      } else if (option === 'all' || option === undefined) {
        optionLength = lineLength;
      }

      for (let i = 0; i < optionLength; i++) {
        var arr = [];
        arrCollection.forEach(function (a) {
          arr.push(a[i]);
        });
        arrFinal.push(arr);
      }
      this.series = [];
      for (let x = 0; x < arrFinal.length; x++) {
        this.series.push({
          x: dateLabels$[x],
          y: arrFinal[x]
        });
      }
      this.createChart();
    });
  }

  constructor(private service: AlphaApiService) { }

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

  updateOptions(option: any): void {
    this.activeOptionButton = option;
    this.getData(option);
  }
}


