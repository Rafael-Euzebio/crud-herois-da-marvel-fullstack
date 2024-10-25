import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesModule } from './heroes/heroes.module';
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot(), 
    HeroesModule, 
    MongooseModule.forRoot(process.env.NODE_ENV === 'production' ? 
                           process.env.PROD_DB
                             : process.env.DEV_DB)],
})
export class AppModule {}
