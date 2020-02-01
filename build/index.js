module.exports = env => {
  const path = env.split('.');
  return require(`./${path[0]}/${path[1]}.js`);
};