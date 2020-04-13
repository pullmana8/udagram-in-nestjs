import { Injectable } from '@nestjs/common';
import { FeedItem } from 'src/models/feedItem.model';

@Injectable()
export class FeedsService {
    feeds: FeedItem[] = [
        {
            caption: 'Look here!',
            url: 'http://example.com',
            createdAt: '01-01-2020',
            updatedAt: '01-02-2020'
        }
    ]
    async getFeeds(): Promise<FeedItem[]> {
        return this.feeds;
    }
}