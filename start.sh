#!/usr/bin/env bash
echo Executing the bot
cd $HOME/bot-js/
node ./util/loadslash.js  &
wait 
node ./index.js
