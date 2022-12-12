import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { Observable } from 'rxjs';
import { ChartOptions } from 'src/app/services/chartoptions';
import { parseISO } from 'date-fns';
import { AlphaApiService } from 'src/app/services/alpha-api.service';
import { DataTesco } from 'src/app/services/data.model';

@Component({
  selector: 'app-apex-bar',
  templateUrl: './apex-bar.component.html',
  styleUrls: ['./apex-bar.component.scss', '../../trading-view/trading-view.component.scss']
})
export class ApexBarComponent implements OnInit {

  @ViewChild("areaChart") chart: ChartComponent; //reference to chart in html
  public chartOptions: Partial<ChartOptions>;

  fileOnLoad: boolean = false;

  data$: Observable<DataTesco[]>;
  data: DataTesco[] = [];
  dateLabels$ = [];

  public activeOptionButton = "6m";

  constructor(private service: AlphaApiService) {
  }

  ngOnInit(): void {
    this.getData(undefined);
  }

  getData(option) {
    this.data$ = this.service.dailyAll();
    this.data$.subscribe(data => {
      this.data = Object.keys(data["Time Series (Daily)"]).map(e => data["Time Series (Daily)"][e]);
      this.dateLabels$ = Object.keys(data["Time Series (Daily)"]);
      let lineLength = this.dateLabels$.length - 1;

      if (option === '1m') {
        this.createChart(this.dateLabels$[21]);
      } else if (option === '1y') {
        this.createChart(this.dateLabels$[252]);
      } else if (option === 'all') {
        this.createChart(this.dateLabels$[lineLength]);
      } else {
        this.createChart(this.dateLabels$[126]);
      }
    });
  }

  createChart(min) {
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
        type: "line",
        id: 'areaChart',
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
        text: "Area Chart",
        align: "left"
      },
      labels: this.dateLabels$,
      xaxis: {
        type: "datetime",
        min: parseISO(min).getTime(),
      },
      yaxis: {
        opposite: true,
        max: 500
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

  updateOptions(option: any): void {
    this.activeOptionButton = option;
    this.getData(option);
  }
}
