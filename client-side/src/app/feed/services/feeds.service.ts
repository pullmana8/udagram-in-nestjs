import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FeedsService {

  constructor(private httpClient: HttpClient) { }

  getFeeds() {
    return this.httpClient.get('http://localhost:3000/feeds')
  }
}
