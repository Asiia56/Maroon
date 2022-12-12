# Marron alias for ExampleFinanceCharts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Description
This project was created to show how to work with data, received from API. 
To receive financial data from API connection was created using HttpClient.
One of pages is dedicated to TradingView widget. It’s a charting platform used by traders and investors worldwide. TradingView widget is a free widget can be used in React, Angular and Vue. However, it’s not supporting Angular 14 yet. So, first chart is actually not API, but widget which uses API on their own. Moreover, this widget is responsive on its own.
For all other charts Alpha Vantage API was used. First at all, to build simple chart, which only presents provided data. That’s why method dailyTest() was used as it provides only the latest 100 data points of Tesco company. This company was used randomly, when creating URL to data. 
On page “Alpha Vantage” the user can choose both company and time period to receive data.
Another accomplishment is bubble chart as for this kind of charts not one number is needed, but three dimensions – “x” and “y” to know where to place, and “r” – to know how big a bubble should be.
OHLC/Candlestick chart was built with help of ApexCharts.js library. On line chart of ApexCharts.js is also possible to choose timeframe of desired data. 
On the other hand, dashboard and responsive layout of other pages was created on plain CSS mostly. Only sometimes Bootstrap comes in hand, For example, for sandwich menu. Or carousel. However, the carousel was build using not only Bootstrap, but also jQuery to show several cards simultaneously. Only with Bootstrap it’s impossible, so the carousel was improved using jQuery. 

