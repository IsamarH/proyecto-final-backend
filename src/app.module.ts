import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'CMrrjmrr09.',
      database: 'db-observatorio',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
