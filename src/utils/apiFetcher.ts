import axios from "axios"
import { HeroDto } from "../dto/HeroDto"

const baseUrl = '/api/'
const heroesUrl = `${baseUrl}/heroes/`

export default {
  async getAll(): Promise<HeroDto[]> {
    const response = await axios.get(heroesUrl)
    return response.data
  },
  async insertOne(hero: HeroDto): Promise<HeroDto> {
    const response = await axios.post(heroesUrl, hero)
    return response.data
  },
  async updateOne(hero: HeroDto): Promise<HeroDto> {
    const response = await axios.put(`${heroesUrl}${hero.id}`, hero)
    return response.data
  },
  async deleteOne(id: string): Promise<HeroDto> {
    const response = await axios.delete(`${heroesUrl}${id}`)
    return response.data
  }
}