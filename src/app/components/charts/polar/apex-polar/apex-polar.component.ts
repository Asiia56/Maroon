import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, ApexNonAxisChartSeries,  ApexResponsive,  ApexChart,  ApexStroke,  ApexFill, ApexLegend, ApexDataLabels } from 'ng-apexcharts';
import { Observable } from 'rxjs';
import { parseISO } from 'date-fns';
import { AlphaApiService } from 'src/app/services/alpha-api.service';
import { DataTesco } from 'src/app/services/data.model';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  stroke: ApexStroke;
  fill: ApexFill;
  labels: any;
  legend: ApexLegend;
  dataLabels: ApexDataLabels
};

@Component({
  selector: 'app-apex-polar',
  templateUrl: './apex-polar.component.html',
  styleUrls: ['./apex-polar.component.scss']
})
export class ApexPolarComponent implements OnInit {

  @ViewChild("apexPolarChart")
  chart: ChartComponent;

  public chartOptions: Partial<ChartOptions>;

  fileOnLoad = false;
  data$: Observable<DataTesco[]>;
  data: DataTesco[] = [];
  dateLabels;

  constructor(private service: AlphaApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.data$ = this.service.dailyTest();
    this.data$.subscribe(data => {
       this.data = Object.keys(data["Time Series (Daily)"]).map(e => data["Time Series (Daily)"][e]);
      this.dateLabels = Object.keys(data["Time Series (Daily)"]).map(e => parseISO(e));
      this.createChart();
    });
  }

  createChart() {
    this.fileOnLoad = true;

    this.chartOptions = {
      series: this.data.map(e => e['4. close']),
      chart: {
        type: "polarArea"
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        colors: ["#fff"]
      },
      fill: {
        opacity: 1
      },
      labels: this.dateLabels.map(e => e.toLocaleDateString('en-GB')),
      legend: {
        show: false
      },
/*
responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },

          }
        }
      ]
*/
    };
  }
}
