export default ({ dispatch }) => next => action => Array.isArray(action)
  ? action.filter(Boolean).map(dispatch)
  : next(action);
