import { Component, OnInit } from '@angular/core';
import { FeedsService } from '../feed/services/feeds.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  feeds: Observable<any>

  constructor(private feedsService: FeedsService) {}

  ngOnInit() {
    this.feeds = this.feedsService.getFeeds();
  }
}
