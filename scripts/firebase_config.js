const fs = require('fs');

const { firebase } = require('../package.json');

fs.writeFileSync('firebase.json2', JSON.stringify(firebase, null, "  "));
