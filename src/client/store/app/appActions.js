require('isomorphic-fetch');
import { createAction, getParameterByName, removeQueryParamsFromUrl } from '../../utils/helpers';

export const SET_LOADING = 'APP::SET_LOADING';
export const SET_ALERT = 'APP::SET_ALERT';

export const setLoading = createAction(SET_LOADING);
export const setAlert = createAction(SET_ALERT);

const DEFAULT_ALERT_TIME = 2000;

export const checkForMessage = () => dispatch => {
  const message = getParameterByName('message');
  const type = getParameterByName('type');
  const duration = +getParameterByName('duration') || DEFAULT_ALERT_TIME;

  if (message) {
    dispatch(setAlert({
      message,
      type,
      duration,
    }));
    removeQueryParamsFromUrl();
  }
};
