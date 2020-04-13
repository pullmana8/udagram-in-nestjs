import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedsService } from './feeds/feeds.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, FeedsService],
})
export class AppModule {}
