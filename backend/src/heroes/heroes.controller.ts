import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { HeroDTO } from './dto/hero.dto';
import { HeroesService } from './heroes.service';

@Controller('heroes')
export class HeroesController {
  constructor(private heroesService: HeroesService) {}

  @Get()
  getAll() {
    return this.heroesService.getAll()
  }

  @Post()
  insertOne(@Body() body: HeroDTO) {
    return this.heroesService.insertOne(body)
  }

  @Put(':id')
  updateOne(@Param('id', ParseIntPipe) id: number, @Body() body: HeroDTO) {
    return this.heroesService.updateOne(id, body)
  }

  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.heroesService.deleteOne(id)
  }
}
