#!/usr/bin/env node
/* eslint-disable no-magic-numbers */

/* eslint-disable global-require */

const { exec } = require('child_process');
const fs = require('fs');
const ora = require('ora');
const chalk = require('chalk');

const spinner = ora('Initializing ipwa').start();
const folderName = process.argv.slice(2)[0] || 'ipwa';

const overWritePackage = () => {

  const newPackageJson = {
    ...getPackageJson(),
    name: folderName,
    version: '0.1.0',
  };

  fs.writeFileSync(`./ipwa-master/package.json`, JSON.stringify(newPackageJson, null, "  "));
};

const showLoader = msg => {
  const colors = [ 'green', 'yellow', 'blue', 'magenta', 'cyan' ];
  setTimeout(() => {
    spinner.color = colors[Math.floor(Math.random() * colors.length)];
    spinner.text = chalk.blue(msg);
  }, 1000);
};

showLoader(`Creating ${folderName}`);
exec(`curl https://codeload.github.com/jsDrome/ipwa/tar.gz/master --output ipwa.tar.gz`, () => {
  showLoader('Extracting contents');
  exec(`tar xvfp ipwa.tar.gz`, () => {
    showLoader('Creating Project folder');
    overWritePackage();
    exec(`mv ipwa-master ${folderName}`, () => {
      showLoader(`Installing dependencies for ${folderName}`);
      exec(`npm ci --prefix ${folderName}`, () => {
        showLoader('Cleaning up');
        exec(`rm ipwa.tar.gz`, () => {
          exec(`rmdir temp`, () => {
            spinner.stop();
            console.log(chalk.green(`Successfully created project ${folderName}!`));
          });
        });
      });
    });
  });
});

const getPackageJson = () => {
  return JSON.parse(fs.readFileSync('./ipwa-master/package.json'));
};
