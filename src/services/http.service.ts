import axios from 'axios'

export default axios.create({
  baseURL: 'https://wolfe-mtb-bikes.netlify.app/',
  headers: {
    'Content-type': 'application/json',
  },
  timeout: 15000,
})
