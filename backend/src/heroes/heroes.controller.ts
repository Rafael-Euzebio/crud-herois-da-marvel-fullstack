import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { HeroRequestDto, HeroResponseDto } from './dto/hero.dto';
import { HeroesService } from './heroes.service';
import { ParseObjectId } from './pipes/parseObjectId.pipe';

@Controller('heroes')
export class HeroesController {
  constructor(private heroesService: HeroesService) {}

  @Get()
  async getAll() {
    return await this.heroesService.getAll()
  }

  @Post()
  async insertOne(@Body() body: HeroRequestDto): Promise<HeroResponseDto> {
    return await this.heroesService.insertOne(body)
  }

  @Put(':id')
  async updateOne(@Param('id', ParseObjectId) id: string, @Body() body: HeroRequestDto): Promise<HeroResponseDto> {
    return await this.heroesService.updateOne(id, body)
  }

  @Delete(':id')
  async deleteOne(@Param('id', ParseObjectId) id: string): Promise<HeroResponseDto> {
    return await this.heroesService.deleteOne(id)
  }
}
