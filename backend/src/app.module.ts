import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesModule } from './heroes/heroes.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [HeroesModule],
})
export class AppModule {}
