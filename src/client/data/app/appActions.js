import { createAction } from '../../utils/helpers';
require('isomorphic-fetch');

export const SET_LOADING = 'APP::SET_LOADING';

export const setLoading = createAction(SET_LOADING);
