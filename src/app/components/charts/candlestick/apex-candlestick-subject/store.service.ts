
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, timer } from 'rxjs';
import { delayWhen, filter, map, retryWhen, shareReplay, tap, withLatestFrom } from 'rxjs/operators';
import { AlphaApiService } from 'src/app/services/alpha-api.service';
import { DataTesco } from 'src/app/services/data.model';
//import { fromPromise } from 'rxjs/internal-compatibility';


@Injectable({
  providedIn: 'root'
})


export class Store {
  private subject = new BehaviorSubject<DataTesco[]>([]);
  info$: Observable<DataTesco[]> = this.subject.asObservable();

  constructor(private service: AlphaApiService) { }

  init() {
    const http$ = this.service.dailyTest();
    console.log('init() triggered')

    http$.pipe(
      tap(() => console.log('HTTP request executed')),
      map(res => Object.values(res['payload']))
    ).subscribe(
      (info: any[]) => this.subject.next(info)
    );
  }


  selectOpenData() {
    console.log('selectOpenData triggered')
    return this.info$.pipe(
      map(info => info.filter(entry => entry['1. open']))
    );
  }


}
