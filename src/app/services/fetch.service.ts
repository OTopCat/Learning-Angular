import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs'
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http'
import { Thread } from '../models/thread'

@Injectable({
    providedIn: 'root'
})
export class FetchService {
  constructor(private httpClient: HttpClient) { }

  getAllSubs(): Observable<any> {
    // wait for all before returning array.array.thread
    return forkJoin([
      this.getSub('https://www.reddit.com/r/sql.json'),
      this.getSub('https://www.reddit.com/r/angular.json'),
      this.getSub('https://www.reddit.com/r/dotnet.json')
    ]);
  }

  getSub(subName: string){
    // get sub json from args pipe to map and send to obj constructor
    return this.httpClient.get(subName).pipe(
      map((res: any) => {
        return res['data']['children'].map((thread: any) => {
            return new Thread(thread['data']);
        });
    }));
  }
}