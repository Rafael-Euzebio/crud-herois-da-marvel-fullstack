import axios from "axios"

const baseUrl = '/api'
export default {
  async getAll() {
    const response = await axios.get(`${baseUrl}heroes`)
    return response.data
  }
}
