import axios from 'axios';

export const api = axios.create({
  // headers: {
  //   'Accepts': 'application/json',
  //   'Access-Control-Allow-Origins': '*'
  // },
  baseURL: "http://localhost:8080",
});
