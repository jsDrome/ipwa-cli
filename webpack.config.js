module.exports = env => {
  const path = env.split('.');
  return require(`./build/${path[0]}/${path[1]}.js`);
};