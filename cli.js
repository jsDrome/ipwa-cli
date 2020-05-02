#!/usr/bin/env node
/* eslint-disable no-magic-numbers, global-require */

const { exec } = require('child_process');
const fs = require('fs');
const ora = require('ora');
const chalk = require('chalk');

const org = 'jsDrome';
const repoName="ipwa-core";
const repoUrl = `https://codeload.github.com/${org}/${repoName}/tar.gz/master`;
const extractedFolder = "ipwa-core-master";

const spinner = ora('Initializing ipwa').start();
const folderName = process.argv.slice(2)[0] || 'ipwa';
const install = process.argv.slice(2)[1] || false;

const showLoader = msg => {
  const colors = [ 'green', 'yellow', 'blue', 'magenta', 'cyan' ];
  setTimeout(() => {
    spinner.color = colors[Math.floor(Math.random() * colors.length)];
    spinner.text = chalk.blue(msg);
  }, 1000);
};

showLoader(`Creating ${folderName}`);

exec(`curl ${repoUrl} --output ${folderName}.tar.gz`, () => {
  showLoader('Extracting contents');
  exec(`tar xvfp ${folderName}.tar.gz`, () => {
    showLoader('Creating Project folder');
    overWritePackage();
    exec(`mv ${extractedFolder} ${folderName}`, () => {
      if (install) {
        showLoader(`Installing dependencies for ${folderName}`);
        exec(`npm ci --prefix ${folderName}`, () => {
          showLoader('Cleaning up');
          exec(`rm ${folderName}.tar.gz`, () => {
            exec(`rmdir temp`, () => {
              spinner.stop();
              console.log(chalk.green(`Successfully created project ${folderName}!`));
            });
          });
        });
      } else {
        showLoader('Cleaning up');
        exec(`rm ${folderName}.tar.gz`, () => {
          exec(`rmdir temp`, () => {
            spinner.stop();
            console.log(chalk.green(`Successfully created project ${folderName}! You'll need to install the dependencies yourself.`));
          });
        });
      }
    });
  });
});

const overWritePackage = () => {

  const newPackageJson = {
    ...getPackageJson(),
    name: folderName,
    version: '0.1.0',
    expo: {
      ...getPackageJson().expo,
      name: folderName,
      slug: folderName,
    },
  };

  fs.writeFileSync(`./${extractedFolder}/package.json`, JSON.stringify(newPackageJson, null, "  "));
};


const getPackageJson = () => {
  return JSON.parse(fs.readFileSync(`./${extractedFolder}/package.json`));
};
