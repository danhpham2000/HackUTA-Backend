import { Module } from '@nestjs/common';
import { MongodbModule } from './mongodb/mongodb.module';
import { PostgresqlModule } from './postgresql/postgresql.module';
import { MysqlModule } from './mysql/mysql.module';

@Module({
  imports: [MongodbModule, PostgresqlModule, MysqlModule],
})
export class DatabaseModule {}
