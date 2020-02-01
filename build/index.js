/* eslint-disable no-magic-numbers */
/* eslint-disable global-require */

module.exports = env => {
  const path = env.split('.');
  return require(`./${path[0]}/${path[1]}.js`);
};