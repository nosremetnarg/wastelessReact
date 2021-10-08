import * as ActionTypes from '../../utils/action-type';
import _ from 'lodash';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  token: null,
}

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);

  switch (action.type) {
    case ActionTypes.AUTH_API_LOADING:
      newState.isLoading = true;
      return newState;

    case ActionTypes.AUTH_API_FAILED:
      newState.isLoading = false;
      return newState;

    case ActionTypes.CHANGE_LOGIN_STATE:
      newState.isLoggedIn = action.payload;
      return newState;

    case ActionTypes.LOGIN_SUCCESS:
      newState.isLoading = false;
      return newState;

    default:
      return state;
  }
}

export default reducer;