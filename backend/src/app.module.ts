import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesModule } from './heroes/heroes.module';
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './config/database.config';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({ 
      load: [databaseConfig],
      isGlobal: true
    }), 
    HeroesModule, 
    MongooseModule.forRootAsync ({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('database_uri')
      }),
      inject: [ConfigService]

    })
  ],
})
export class AppModule {}
