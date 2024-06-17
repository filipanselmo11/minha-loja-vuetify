import axios from 'axios';

export const api = axios.create({
  headers: {
    'Accepts': 'application/json',
    'Access-Control-Allow-Origins': '*'
  },
  baseURL: "http://127.0.0.1:8000",
});
