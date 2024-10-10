import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { OpenaiModule } from './openai/openai.module';

@Module({
  imports: [DatabaseModule, OpenaiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
