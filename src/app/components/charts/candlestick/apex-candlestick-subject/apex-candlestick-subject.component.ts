import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexYAxis, ApexXAxis, ApexTitleSubtitle } from "ng-apexcharts";
import { parseISO } from 'date-fns';
import { DataTesco } from "src/app/services/data.model";
import { AlphaApiService } from "src/app/services/alpha-api.service";
import { data } from "jquery";
import { Store } from './store.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-apex-candlestick-subject',
  templateUrl: './apex-candlestick-subject.component.html',
  styleUrls: ['./apex-candlestick-subject.component.scss']
})
export class ApexCandlestickSubjectComponent implements OnInit {

  @ViewChild("apexChart", { static: false }) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  fileOnLoad: boolean = false;

  ngOnInit(): void {
    //this.getData();
    //const info$ = this.store.info$;
    this.store.init();
    this.data$
  }

  public activeOptionButton = "1m";

  data$: Observable<DataTesco[]> = this.store.selectOpenData();
  dateLabels$;
  series = [];
  lineCount: number;

  constructor(private store: Store) { }

  onTimeChange(timeframe: number) {

  }


  timeframes = [
    { id: 0, timeframe: 4, label: '1 Week', selected: false },
    { id: 1, timeframe: 20, label: '1 Month', selected: false },
    { id: 2, timeframe: 62, label: '3 Months', selected: false },
    { id: 3, timeframe: 125, label: '6 Months', selected: false },
    { id: 4, timeframe: 251, label: '1 Year', selected: false },
    { id: 5, timeframe: 1288, label: '5 Years', selected: false },
    { id: 6, timeframe: undefined, label: 'Max', selected: false }
  ];

}
