# Official wiki
## Overview
1. [Overview](/SqueezeBot/wiki#overview)
2. [Project Status](/SqueezeBot/wiki#project-status)
3. [Commands](/SqueezeBot/wiki#commands)
    1. [Slash-commands](/SqueezeBot/wiki#slash-commands)
    2. [Legacy Commands](/SqueezeBot/wiki#legacy-commands)
4. [Events](/SqueezeBot/wiki#events)
    1. [Member joins](#member-joins)
5. [Api integrations](#api-integrations)
    1. [nekos.life](#nekoslife)

## Project Status
The **project status** is actively updated. The current state is "Under Development", but it might change to two other states: "Actively Maintained" or "Deprecated"
<p align="center">
	<img src="https://files.catbox.moe/17w06w.png" 
	        width="300" 
    		height="100"/>
	<img src="https://files.catbox.moe/9pda0e.png" 
	        width="300" 
    		height="100"/>
  	<img src="https://files.catbox.moe/335qiy.png" 
	        width="300" 
    		height="100"/>
</p>  

## Commands

### Slash-commands
* **`/img interactions` command**
	* Interact with your friends by hugging, kissing, slapping and more. Provided by *nekos.life* api
* **`/img request` command**
	* Request pictures with nekos, cats, gecgs and more. Provided by *nekos.life* api
* **`/bot-info` command**
	* View information about the bot eg. Uptime, Discord.js version
* **`/help` command**
	* View the list of all available commands
* **`/ping` command**
	* Check if the bot is online
>  Commands below require special permissions
* **`/ban` command**
	* Ban users from your server
* **`/kick` command**
	* Kick unwanted members
* **`/timeout` command**
	* Mute rude users for a set amount of time
* **`/purge` command**
	* Delete multiple messages at once
> note: a max of 100 messages can be deleted
### Legacy Commands
* **`!help` command**
	* View the list of all available commands
* **`!ping` command**
	* Check if the bot is online

## Events

### Member joins

## Api integrations

### nekos.life
Squeez uses **nekos.life** api to provide various gifs in japanese manga/anime style. It is being used in the `/img` command, both in the `interaction` and `request` subcommands. Currently, there is *no support for sending pornography* through the bot, but this feature will be considered in the future.
