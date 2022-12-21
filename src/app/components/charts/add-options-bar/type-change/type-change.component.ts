import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, ChartType } from 'ng-apexcharts';
import { Observable } from 'rxjs';
import { ChartOptions } from 'src/app/services/chartoptions';
import { parseISO } from 'date-fns';
import { AlphaApiService } from 'src/app/services/alpha-api.service';
import { DataTesco } from 'src/app/services/data.model';

@Component({
  selector: 'app-type-change',
  templateUrl: './type-change.component.html',
  styleUrls: ['./type-change.component.scss']
})
export class TypeChangeComponent implements OnInit {

  @ViewChild("changeTypeChart") chart: ChartComponent; //reference to chart in html
  constructor(public service: AlphaApiService) { }
  public chartOptions: Partial<ChartOptions>;

  ngOnInit(): void {
    this.getData()
  }

  fileOnLoad: boolean = false;
  data$: Observable<DataTesco[]>;
  data: DataTesco[] = [];
  dateLabels$ = [];
  chartType = 'line' as ChartType;
  showLabels: boolean = true;

  getData() {
    this.data$ = this.service.dailyTest();
    this.data$.subscribe(data => {
      this.data = Object.keys(data["Time Series (Daily)"]).map(el => data["Time Series (Daily)"][el]);
      this.dateLabels$ = Object.keys(data["Time Series (Daily)"]);
      this.createChart();

    });
  }

  changeChart() {
    if (this.chartType == 'line') {
      this.chartType = 'bar'
    } else if (this.chartType == 'bar') {
      this.chartType = 'radar'
      this.showLabels = false;
    } else if (this.chartType == "radar") {
      this.chartType = "area";
      this.showLabels = true;
    } else if (this.chartType == "area") {
      this.chartType = "line";
    }
    this.createChart();
  }

  createChart() {

    this.fileOnLoad = true;

    this.chartOptions = {
      series: [
        {
          name: '4. close',
          data: this.data.map(e => e['4. close'])
        },
        {
          name: '1. open',
          data: this.data.map(e => e['1. open'])
        }
      ],
      chart: {
        type: this.chartType,
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
        text: "Comparison of open and close price",
        align: "left"
      },
      labels: this.dateLabels$,
      xaxis: {
        type: "datetime",
        labels: {
          show: this.showLabels
        }
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
