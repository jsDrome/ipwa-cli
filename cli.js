#!/usr/bin/env node
/* eslint-disable no-magic-numbers */

/* eslint-disable global-require */

const { exec } = require('child_process');
const fs = require('fs');
const ora = require('ora');
const chalk = require('chalk');

const spinner = ora('Initialising jsDrome').start();
const folderName = process.argv.slice(2)[0] || 'jsdrome';

const overWritePackage = () => {
  const packageJson = require(`./${folderName}/package.json`);

  packageJson.name = folderName;
  packageJson.version = '1.0.0';
  packageJson.homepage = 'https://jsdrome.com';

  fs.writeFileSync(`${folderName}/package.json`, JSON.stringify(packageJson, null, "  "));
};

const showLoader = msg => {
  const colors = [ 'green', 'yellow', 'blue', 'magenta', 'cyan' ];
  setTimeout(() => {
    spinner.color = colors[Math.floor(Math.random() * colors.length)];
    spinner.text = msg;
  }, 1000);
};

showLoader('Initializing jsDrome');
exec(`curl https://codeload.github.com/jsDrome/jsDrome/tar.gz/master --output jsdrome.tar.gz`, () => {
  showLoader('Extracting contents');
  exec(`tar xf jsdrome.tar.gz`, () => {
    showLoader('Creating Project folder');
    exec(`mv jsDrome-master ${folderName}`, () => {
      showLoader('Installing dependencies');
      overWritePackage();
      exec(`npm ci --prefix ${folderName}`, () => {
        showLoader('Cleaning up');
        exec(`rm jsdrome.tar.gz`, () => {
          spinner.stop();
          console.log(chalk.green(`Successfully created project ${folderName}!`));
        });
      });
    });
  });
});
