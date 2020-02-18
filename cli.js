#!/usr/bin/env node
/* eslint-disable no-magic-numbers */

const { exec } = require('child_process');
const folderName = process.argv.slice(2)[0] || 'jsdrome';

exec(`mkdir ${folderName} && wget -c https://github.com/jsDrome/jsDrome/tarball/master -O - | tar -xz - -C ${folderName} --strip-components=1`, (err, stdout, stderr) => {
  if (err) {
    //some err occurred
    console.error(err)
  } else {
    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  }
});
