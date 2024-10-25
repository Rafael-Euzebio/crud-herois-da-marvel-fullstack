import { Injectable } from '@nestjs/common';
import { HeroRequestDto, HeroResponseDto } from './dto/hero.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Hero } from './schemas/heroes.schema';
import { Model } from 'mongoose';
import { plainToClass } from 'class-transformer';

@Injectable()
export class HeroesService {
  heroes = []
  constructor(@InjectModel(Hero.name) private heroModel: Model<Hero>) {}

  async getAll(): Promise<HeroResponseDto[]> {
    const users = await this.heroModel.find().exec()
    return plainToClass(HeroResponseDto, users)
  }

  async insertOne(hero: HeroRequestDto): Promise<HeroResponseDto> {
    const newHero = new this.heroModel(hero)
    const result = await newHero.save()
    return plainToClass(HeroResponseDto, result)
  }

  async updateOne(id: string, hero: HeroRequestDto) {
    const result = await this.heroModel.findByIdAndUpdate(id, hero, { returnDocument: 'after'})
    return plainToClass(HeroResponseDto, result)
  }

  async deleteOne(id: string) {
    const result = await this.heroModel.findByIdAndDelete(id)
    return plainToClass(HeroResponseDto, result)
  }
}
