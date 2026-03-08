import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from './account/account.module';
import { PersonModule } from './person/person.module';
import { Person } from './person/model/person.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_goodbank',
      entities: [Person],
      synchronize: true,
      // autoLoadEntities: true,
      logging: true
    }),
    AccountModule,
    PersonModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
