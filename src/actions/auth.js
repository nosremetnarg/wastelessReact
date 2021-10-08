import * as ActionTypes from '../utils/action-type'
import * as ApiServices from '../services/service';

export const authApiLoading = () => ({
  type: ActionTypes.AUTH_API_LOADING,
})

export const apiAuthFailed = (error) => ({
  type: ActionTypes.AUTH_API_FAILED,
  payload: error,
})

export const changeLoginState = (isLoggedIn) => {
  return {
    type: ActionTypes.CHANGE_LOGIN_STATE,
    payload: isLoggedIn,
  }
}

export const login = (data) => {
  return (dispatch, getState) => {
    dispatch(authApiLoading());
    return ApiServices.loginService(data)
      .then((response) => {
        dispatch({
          type: ActionTypes.LOGIN_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch(apiAuthFailed(error));
      })
  }
}