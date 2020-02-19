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
  delete packageJson.bugs;

  fs.writeFileSync(`${folderName}/package.json`, JSON.stringify(packageJson, null, "  "));
};

setTimeout(() => {
  spinner.color = 'yellow';
  spinner.text = 'Initializing jsDrome';
}, 1000);

exec(`tar xf jsdrome.tar.gz && mv jsDrome-master ${folderName}`, () => {
  setTimeout(() => {
    spinner.color = 'green';
    spinner.text = 'Installing dependencies';
  }, 1000);
  overWritePackage();
  exec(`npm ci --prefix ${folderName}`, () => {
    spinner.stop();
    console.log(chalk.blue('Done!'));
  });
});
