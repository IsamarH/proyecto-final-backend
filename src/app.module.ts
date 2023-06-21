import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudentsModule } from './estudents/estudents.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'estudiantes',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    EstudentsModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
