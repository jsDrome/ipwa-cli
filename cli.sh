#!/usr/bin/env bash

ARG=$1
CURRENT_VERSION=$(npm run version --silent)

if [ "$1" = "" ]; then
  echo 'No folder name provided!'
  exit;
elif [ "$1" = "-v" ]; then
  echo $CURRENT_VERSION
  exit;
fi

FOLDER=${ARG:-"my-jsdrome-app"}
wget -c https://codeload.github.com/jsDrome/jsDrome/tar.gz/v$CURRENT_VERSION -O - | tar -xz
mv jsDrome-$CURRENT_VERSION $FOLDER
