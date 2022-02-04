#!/usr/bin/env bash
echo Executing the bot
cd $HOME/bot-js/
node util/loadslash.js
node index.js
