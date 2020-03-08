/* eslint-disable no-magic-numbers */
import immutable from 'object-path-immutable';

export const createAction = type => payload => ({ type, payload });
export const handleActions = (handlers, defaultState) => (state = defaultState, action) => {
  if (handlers[action.type]) return handlers[action.type](state, action);
  return state;
};

export const updateProperty = (path, value, obj) => immutable.set(obj, path, value);

export const getParameterByName = (name, url) => {
  try {
    if (!url) url = window.location.href;
    name = name.replace(/[[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  catch (err) {
    return '';
  }
};

export const removeQueryParamsFromUrl = () => window.history.replaceState(null, null, window.location.pathname);

export const insertTag = (src, d, s, id) => {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = src;
  fjs.parentNode.insertBefore(js, fjs);
};
