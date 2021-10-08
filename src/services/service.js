import { requestService  } from './request';
import * as ApiUrls from './api-url';

export const commonService = (request, token = true) => {
  let reqObj = {
    method: request.method,
    url: request.url,
  }
  if (request.data) {
    reqObj = Object.assign(reqObj, { data: request.data });
  }
  if (request.queryParams) {
    reqObj = Object.assign(reqObj, { queryParams: request.queryParams });
  }
  return requestService(reqObj)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return Promise.reject(error.response);
    })
}

export const loginService = (data) => {
  return commonService(
    {
      method: 'POST',
      url: ApiUrls.LOG_IN_ENDPOINT,
      data,
    },
    false,
  )
}