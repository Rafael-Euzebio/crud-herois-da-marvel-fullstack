import axios from "axios"
import { HeroRequestDto, HeroResponseDto } from "../dto/HeroDto"

const baseUrl = '/api/'
const heroesUrl = `${baseUrl}/heroes/`

export default {
  async getAll(): Promise<HeroResponseDto[]> {
    const response = await axios.get(heroesUrl)
    return response.data
  },
  async insertOne(hero: HeroRequestDto): Promise<HeroResponseDto> {
    const response = await axios.post(heroesUrl, hero)
    return response.data
  },
  async deleteOne(id: string): Promise<HeroResponseDto> {
    const response = await axios.delete(`${heroesUrl}${id}`)
    return response.data
  }
}
