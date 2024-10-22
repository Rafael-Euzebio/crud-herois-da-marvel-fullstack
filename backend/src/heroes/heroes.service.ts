import { Injectable } from '@nestjs/common';
import { HeroDTO } from './dto/hero.dto';

@Injectable()
export class HeroesService {
  heroes = []

  getAll() {
    return this.heroes
  }

  insertOne(hero: HeroDTO) {
    const newHero = {...hero, id: Date.now() + Math.floor(Math.random() * 10000)}
    this.heroes.push(newHero)
    return newHero
  }

  updateOne(id: number, hero: HeroDTO) {
    const index = this.heroes.findIndex(obj => obj.id === id)
    this.heroes[index] = {...hero, id: id }
    return this.heroes[index]
  }

  deleteOne(id: number) {
    const index = this.heroes.findIndex(obj => obj.id === id)
    this.heroes.splice(index)
    return
  }
}
