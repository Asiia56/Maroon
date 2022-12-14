import { Component, ViewChild } from '@angular/core';
import 'chartjs-adapter-date-fns';
import 'chartjs-chart-financial';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, ChartConfiguration, ChartType } from 'chart.js';
import { add, parseISO } from 'date-fns';
import { CandlestickController, CandlestickElement, OhlcController, OhlcElement } from 'chartjs-chart-financial';

@Component({
  selector: 'app-ohlc2',
  templateUrl: './ohlc2.component.html',
  styleUrls: ['./ohlc2.component.scss', '../../trading-view/trading-view.component.scss']
})
export class Ohlc2Component {

  barCount = 70;
  initialDateStr = '2022-12-05T00:00:00';

  public financialChartData: ChartConfiguration['data'] = {
    datasets: [ {
      label: 'Chartjs-chart-financial',
      data: this.getRandomData(this.initialDateStr, this.barCount)
    } ]
  };

  public financialChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        time: {
          unit: 'day'
        },
        adapters: {
          date: {
          }
        },
        ticks: {
          source: 'auto'
        }
      }
    }
  };
  public financialChartColors = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];

  public financialChartLegend = true;
  public financialChartType: ChartType = 'ohlc';
  public financialChartPlugins = [];

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor() {
    Chart.register(CandlestickController, OhlcController, CandlestickElement, OhlcElement);
  }

  randomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  randomBar(date: Date, lastClose: number): { c: number; x: number; h: number; l: number; o: number } {
    const open = this.randomNumber(lastClose * 0.95, lastClose * 1.05);
    const close = this.randomNumber(open * 0.95, open * 1.05);
    const high = this.randomNumber(Math.max(open, close), Math.max(open, close) * 1.1);
    const low = this.randomNumber(Math.min(open, close) * 0.9, Math.min(open, close));
    return {
      x: +date,
      o: open,
      h: high,
      l: low,
      c: close
    };
  }

  getRandomData(dateStr: string, count: number): { c: number; x: number; h: number; l: number; o: number }[] {
    let date = parseISO(dateStr);
    const data = [ this.randomBar(date, 30) ];
    while (data.length < count) {
      date = add(date, { days: 1 });
      if (date.getDay() <= 5) {
        data.push(this.randomBar(date, data[data.length - 1].c));
      }
    }
    return data;
  }
}
