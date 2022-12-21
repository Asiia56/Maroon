import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, ChartType } from 'ng-apexcharts';
import { Observable } from 'rxjs';
import { ChartOptions } from 'src/app/services/chartoptions';
import { parseISO } from 'date-fns';
import { AlphaApiService } from 'src/app/services/alpha-api.service';
import { DataTesco } from 'src/app/services/data.model';

@Component({
  selector: 'app-company-change',
  templateUrl: './company-change.component.html',
  styleUrls: ['./company-change.component.scss']
})
export class CompanyChangeComponent implements OnInit {

  constructor(public service: AlphaApiService) { }

  @ViewChild("changeCompanyChart") chart: ChartComponent; //reference to chart in html
  public chartOptions: Partial<ChartOptions>;

  //fileOnLoad: boolean = false;
  date$ = [];
  //dateLabels$ = [];
 // dailyData = [];
  keyword: string = '';
  searchResults = [];
  lineData$ = [];
  barData$ = [];

  ngOnInit(): void {
    this.createChart()
  }

  onKeyup(key: Array<any>) {
    this.keyword += key["key"];
    this.service.search(this.keyword).subscribe(data => {
      let searchData: [] = data["bestMatches"];
      for (let i = 0; i < searchData.length; i++) {
        this.searchResults.push({
          symbol: searchData[i]["1. symbol"],
          name: searchData[i]["2. name"]
        })
      }
    })
  }

  getData(event: Array<any>) {
    let line = [];
    let bar = [];

    this.service.daily(event['srcElement']['value']).subscribe(data => {
      this.date$ = Object.keys(data["Time Series (Daily)"]);
      let dailyData = Object.keys(data["Time Series (Daily)"]).map(el => data["Time Series (Daily)"][el]);
      dailyData.forEach(function (day) {
        line.unshift(day["2. high"]);
        bar.unshift(day["3. low"]);
      })
      this.chartOptions.series[0].data = line;
      this.chartOptions.series[1].data = bar;
      this.lineData$ = line;
      this.barData$ = bar;
      console.log('this.chartOptions.series[0].data', this.chartOptions.series[0].data)
      console.log('this.chartOptions.series[1].data', this.chartOptions.series[1].data)
      this.createChart(); // calling method after initializing the this.data variable
    });
  }

  createChart() {
    // this.fileOnLoad = true;

    this.chartOptions = {
      series: [
        {
          name: '2. high',
          data: this.lineData$
        },
        {
          name: '3. low',
          data: this.barData$
        }
      ],
      chart: {
        type: 'line',
        height: 550,
        zoom: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Comparison of high and low price",
        align: "left"
      },
      labels: this.date$,
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        opposite: true,
      },
      tooltip: {
        x: {
          format: "dd MMM"
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100]
        }
      }
    };
  }

}
