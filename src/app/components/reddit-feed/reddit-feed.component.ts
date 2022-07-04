import { Component, OnInit } from '@angular/core';
import { Thread } from '../../models/thread'
import { FetchService } from '../../services/fetch.service'

@Component({
  selector: 'app-reddit-feed',
  templateUrl: './reddit-feed.component.html',
  styleUrls: ['./reddit-feed.component.css']
})
export class RedditFeedComponent implements OnInit {

  threads: Thread[];

    constructor(private FetchService: FetchService) {
      this.threads = []
    }

    ngOnInit() {
      this.getAllSubs();
      this.threads.sort((elem1, elem2) => (elem1.createdDate < elem2.createdDate ? -1 : 1));
    }

    refreshButton() {
      this.threads = [];
      this.ngOnInit();
    }

    clearHTML(input: string): any {
      return new DOMParser().parseFromString(input, "text/html").documentElement.textContent;
    }

    getAllSubs(): void {
      //subscribe to service
      this.FetchService.getAllSubs().subscribe((result: any) => {
        //unpack return into single array<thread>
        result.forEach((resArr: Thread[]) => {
          resArr.forEach((element: Thread) => {
            this.threads.push(element);
          }); 
        });
        //sort by date
        this.threads.sort((elem1, elem2) => (elem1.createdDate < elem2.createdDate ? 1 : -1));
      });      
    }
}
