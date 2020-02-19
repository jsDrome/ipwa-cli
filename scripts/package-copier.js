const fs = require('fs');

const { name, devDependencies, engines } = require('../package.json');

const newPackage = {
  name,
  main: "index.js",
  dependencies: devDependencies,
  engines,
};

fs.writeFileSync('_dist/package.json', JSON.stringify(newPackage, null, "  "));
