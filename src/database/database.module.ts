import { Module } from '@nestjs/common';
import { MongodbModule } from './mongodb/mongodb.module';
import { PostgresqlModule } from './postgresql/postgresql.module';

@Module({
  imports: [MongodbModule, PostgresqlModule],
})
export class DatabaseModule {}
