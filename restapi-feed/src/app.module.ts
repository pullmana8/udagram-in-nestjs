import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedsService } from './feeds/feeds.service';
import { FeedsController } from './feeds/feeds.controller';

@Module({
  imports: [],
  controllers: [AppController, FeedsController],
  providers: [AppService, FeedsService],
})
export class AppModule {}
