const fs = require('fs');

const { name, dependencies, engines } = require('../package.json');

const newPackage = {
  name,
  main: "index.js",
  dependencies,
  engines,
};

fs.writeFileSync('_dist/package.json', JSON.stringify(newPackage, null, "  "));
