import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
  // maxAge: 1 * 60 * 1000
})

const api = axios.create({
  adapter: cache.adapter
})

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

const request = (params) => {
  return api({
    method: params.method,
    headers: Object.assign(
      {},
      headers,
      { Authorization: params.token || ''},
    ),
    params: params.queryParams,
    url: params.url,
    data: params.data,
  })
}

export const requestService = (params) => request(Object.assign({ method: 'GET' }, { ...params }))