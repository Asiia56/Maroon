import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AlphaApiService {

  constructor(private httpClient: HttpClient) { }

  //api key was get via www.alphavantage.co to get your free api key

  API_KEY = "&apikey=/Y3A4F3M5B9D6C2DE";
  urlBeg = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=';
  dailyBeg = 'https://www.alphavantage.co/query?outputsize=full&function=TIME_SERIES_DAILY_ADJUSTED&symbol=';

  public getInfo() {
    return this.httpClient.get(`${this.API_KEY}`)
  }


  search(symbol: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.urlBeg}${symbol}${this.API_KEY}`)
  }

  daily(symbol: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.dailyBeg}${symbol}${this.API_KEY}`)
  }

  dailyTest(): Observable<any[]> {
    return this.httpClient.get<any[]>(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=TSCO.LON&outputsize=compact${this.API_KEY}`)
  }

  dailyAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=TSCO.LON&outputsize=full${this.API_KEY}`)
  }


}
