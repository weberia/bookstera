#!/usr/bin/env bash

# Attention: for development only, not a part of Universio
# This bash script is only used to create symlinks from
# developed hapi plugin inside Weberia so that I don't need
# to go get them at npmjs.com

if [ $1 == "y" ]; then
  cd node_modules
  ln -s ../../weberia/collabox/plugin collabox
  ln -s ../../weberia/semantix/plugin semantix
  ln -s ../../weberia/speax/plugin speax
  ln -s ../../weberia/storix/plugin storix
  ln -s ../../weberia/rlogix/plugin rlogix
  cd ..
else
  rm node_modules/collabox
  rm node_modules/semantix
  rm node_modules/speax
  rm node_modules/storix
  rm node_modules/rlogix
fi
