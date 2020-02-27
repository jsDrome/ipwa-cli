const fs = require('fs');

const { name, devDependencies, engines } = require('../package.json');

const dontNeedForFirebase = [ '@percy/script', 'cypress', 'puppeteer', 'react-native', 'expo', 'expo-cli', 'nodemon' ];

dontNeedForFirebase.forEach(_package => delete devDependencies[_package]);

const newPackage = {
  name,
  main: "index.js",
  dependencies: devDependencies,
  engines,
};

fs.writeFileSync('_dist/package.json', JSON.stringify(newPackage, null, "  "));
