const MODE = import.meta.env.MODE 
const PROXY_URL= '/api'
const API_URL = (MODE === "development") ? `${PROXY_URL}/heroes/` : '/heroes/'

export default API_URL 
