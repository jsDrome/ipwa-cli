import { handleActions, updateProperty } from '../../utils/helpers';
import state from '../state';
import {
  SET_LOADING,
} from './appActions';

const setLoading = (state, action) => updateProperty([ 'loading' ], action.payload, state);

export default handleActions({
  [SET_LOADING]: setLoading,
}, state.app);
