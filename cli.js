#!/usr/bin/env node
/* eslint-disable no-magic-numbers */

const { exec } = require('child_process');
const fs = require('fs');

const folderName = process.argv.slice(2)[0] || 'jsdrome';

exec(`mkdir ${folderName} && wget -c https://github.com/jsDrome/jsDrome/tarball/master -O - | tar -xz - -C ${folderName} --strip-components=1`, (err, stdout, stderr) => {
  if (err) {
    //some err occurred
    console.error(err)
  } else {
    overWritePackage();
    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  }
});

const overWritePackage = () => {
  // exec(`rm ${folderName}/package-lock.json`);
  // eslint-disable-next-line global-require
  const packageJson = require(`./${folderName}/package.json`);

  packageJson.name = folderName;
  packageJson.version = '1.0.0';
  packageJson.homepage = 'https://jsdrome.com';
  delete packageJson.bugs;

  fs.writeFileSync(`${folderName}/package.json`, JSON.stringify(packageJson, null, "  "));
};
