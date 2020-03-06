import { handleActions, updateProperty } from '../../utils/helpers';
import state from '../state';
import {
  SET_LOADING,
  SET_ALERT,
} from './appActions';

const setLoading = (state, action) => updateProperty([ 'loading' ], action.payload, state);
const setAlert = (state, action) => updateProperty([ 'alert' ], action.payload, state);

export default handleActions({
  [SET_LOADING]: setLoading,
  [SET_ALERT]: setAlert,
}, state.app);
