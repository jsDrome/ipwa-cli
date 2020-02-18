#!/usr/bin/env bash

ARG=$1

if [ "$1" = "" ]; then
  echo 'No folder name provided!'
  exit;
# elif [ "$1" = "-v" ]; then
#   echo $CURRENT_VERSION
#   exit;
fi
mkdir $1
wget -c https://github.com/jsDrome/jsDrome/tarball/master -O - | tar -xz - -C "$1" --strip-components=1
