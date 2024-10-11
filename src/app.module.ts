import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { OpenaiModule } from './openai/openai.module';
import { AwsModule } from './aws/aws.module';
import { GraphqlModule } from './graphql/graphql.module';

@Module({
  imports: [DatabaseModule, OpenaiModule, AwsModule, GraphqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
