import axios from "axios";

const apiKey = 'd0265bce12cc4edcb3e7a8a2eb0a9606'

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    headers: {
    'Content-Type': 'application/json',
  },
    params:{
        key: apiKey
    }
})

