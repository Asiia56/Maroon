
import { Component, ViewChild, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexYAxis, ApexXAxis, ApexTitleSubtitle } from "ng-apexcharts";
import { parseISO } from 'date-fns';
import { DataTesco } from "src/app/services/data.model";
import { AlphaApiService } from "src/app/services/alpha-api.service";
import { data } from "jquery";

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
  styleUrls: ['./apex-candlestick.component.scss', '../apex-candlestick-was/apex-candlestick-was.component.scss'] //'../trading-view/trading-view.component.scss'
})
export class ApexCandlestickComponent implements OnInit {

  @ViewChild("apexChart", { static: false }) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  fileOnLoad: boolean = false;

  ngOnInit(): void {
    this.getData();
  }

  data$: Observable<DataTesco[]>;
  dateLabels$;
  series = [];
  lineCount: number = 0;


  getData() {
    let open = [];
    let close = [];
    let high = [];
    let low = [];
    let arrFinal = [];

    this.service.dailyAll().subscribe(data => {
      let dailyData = Object.keys(data["Time Series (Daily)"]).map(e => data["Time Series (Daily)"][e]);
      this.dateLabels$ = Object.keys(data["Time Series (Daily)"]);
      dailyData.forEach(function (day) {
        high.unshift(day["2. high"]);
        low.unshift(day["3. low"]);
        open.unshift(day["1. open"]);
        close.unshift(day["4. close"]);
      })
      let arrCollection = [open, high, low, close];
      this.lineCount = open.length;

      for (let i = 0; i < this.lineCount; i++) {
        var arr = [];
        arrCollection.forEach(function (a) {
          arr.push(a[i]);
        });
        arrFinal.push(arr);
      }
      this.series = [];
      for (let x = 0; x < arrFinal.length; x++) {
        this.series.push({
          x: this.dateLabels$[x],
          y: arrFinal[x]
        });
      }

      /*
            let copyArr = this.series.slice(0, this.timeframes[1].timeframe);
            this.timeframes[1] = { id: 1, timeframe: 20, label: '1 Month', selected: true };
            this.createChart(copyArr);
      */
      this.timeframes[6] = { id: 6, timeframe: 4539, label: 'Max', selected: true };
      this.createChart(this.series)
    });
  }

  constructor(private service: AlphaApiService) { }

  onTimeChange(timeframe) {
    let copyArr = [];
    copyArr = this.series.slice(0, timeframe);
    this.chartOptions.series[0].data = copyArr;
    this.createChart(copyArr);
  }

  createChart(data: any[]) {
    this.fileOnLoad = true; //is needed to prevent html load earlier then ts receive data from api

    this.chartOptions = {
      series: [{
        data: data
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

  timeframes = [
    { id: 0, timeframe: 4, label: '1 Week', selected: false },
    { id: 1, timeframe: 20, label: '1 Month', selected: false },
    { id: 2, timeframe: 62, label: '3 Months', selected: false },
    { id: 3, timeframe: 125, label: '6 Months', selected: false },
    { id: 4, timeframe: 251, label: '1 Year', selected: false },
    { id: 5, timeframe: 1288, label: '5 Years', selected: false },
    { id: 6, timeframe: 4539, label: 'Max', selected: false } //undefined
  ];

}

