import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StockData} from "../../models/StockData";
import {CandlestickChartData} from "../../models/CandlestickChartData";

import Highcharts from 'highcharts/highstock';
import HC_exporting from 'highcharts/modules/exporting';

HC_exporting(Highcharts);


@Component({
  selector: 'app-candlestick-chart',
  templateUrl: './candlestick-chart.component.html',
  styleUrls: ['./candlestick-chart.component.scss']
})
export class CandlestickChartComponent implements OnInit{
  chartOptions: Highcharts.Options = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchStockData();
  }

  fetchStockData(): void {
    // Fetch data from the API (similar to the previous examples)
    // ...
    const API_KEY = 'ci90f31r01qitdq2d2u0ci90f31r01qitdq2d2ug';
    const symbol = 'AAPL'; // Replace 'AAPL' with the stock symbol you want to visualize
    const resolution = 'D'; // 'D' for daily data, 'W' for weekly, 'M' for monthly, etc.
    const from_date = Math.floor(new Date('2022-01-01').getTime() / 1000); // Unix timestamp format
    const to_date = Math.floor(new Date('2022-07-01').getTime() / 1000); // Unix timestamp format

    const url = `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${from_date}&to=${to_date}&token=${API_KEY}`;

    this.http.get<any>(url).subscribe((response) => {
      // Process the data for the candlestick chart
      const processedData = this.processDataForCandlestick(response);

      // Set up the Highcharts options for the candlestick chart
      this.chartOptions = this.getHighchartsOptions(processedData);
    });
  }

  processDataForCandlestick(data: StockData): CandlestickChartData[] {
    // Process the data and return it in a format suitable for Highcharts
    // ...
    const processedData: CandlestickChartData[] = [];

    for (let i = 0; i < data.t.length; i++) {
      const timestamp = data.t[i];
      const date = new Date(timestamp * 1000); // Convert Unix timestamp to JavaScript Date

      const open = data.o[i];
      const high = data.h[i];
      const low = data.l[i];
      const close = data.c[i];

      const candlestickData: CandlestickChartData = {
        0: date.getTime(),
        1: open,
        2: high,
        3: low,
        4: close,
      };

      processedData.push(candlestickData);
    }

    return processedData;
  }

  getHighchartsOptions(data: any[]): Highcharts.Options {
    // Generate the Highcharts options for the candlestick chart
    return {
      rangeSelector: {
        selected: 1
      },
      title: {
        text: 'Candlestick Chart for AAPL' // Customize the chart title
      },
      series: [{
        type: 'candlestick',
        name: 'AAPL',
        data: data,
        tooltip: {
          valueDecimals: 2 // Number of decimal places in the tooltip values
        }
      }]
    };
  }

  protected readonly Highcharts = Highcharts;
}
