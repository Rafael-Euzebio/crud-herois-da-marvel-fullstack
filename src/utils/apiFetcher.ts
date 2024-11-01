import axios from "axios"
import { HeroDto } from "../dto/HeroDto"
import API_URL from "../constants/api"
API_URL

export default {
  async getAll(url: string): Promise<HeroDto[]> {
    const response = await axios.get(url)
    return response.data
  },
  async insertOne(hero: HeroDto): Promise<HeroDto> {
    const response = await axios.post(API_URL, hero)
    return response.data
  },
  async updateOne(hero: HeroDto): Promise<HeroDto> {
    const response = await axios.put(`${API_URL}${hero.id}`, hero)
    return response.data
  },
  async deleteOne(id: string): Promise<HeroDto> {
    const response = await axios.delete(`${API_URL}${id}`)
    return response.data
  }
}
