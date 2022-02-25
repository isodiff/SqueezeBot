const Discord = require("discord.js")
const Sequelize = require('sequelize');
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
    ]
})

const sequelize = new Sequelize('database', 'dataadmin', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: 'data.sqlite',
});

const Wlcms = sequelize.define('welcomes', {
    name: {
        type: Sequelize.STRING,
        unique: true,
    },
    description: Sequelize.TEXT,
    trueFalse: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
    },
    top_text: Sequelize.TEXT,
    bottom_text: Sequelize.TEXT,
    image_link: Sequelize.TEXT,
    username: Sequelize.STRING,
    usage_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
    },
});

let bot = {
    client,
    prefix: "\!",
    owners: ["687776146875744319"],
    Wlcms,
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()
client.slashcommands = new Discord.Collection()
client.buttons = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)
client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
client.loadButtons = (bot, reload) => require("./handlers/buttons")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)
client.loadSlashCommands(bot, false)
client.loadButtons(bot, false)


module.exports = bot

client.login(process.env.TOKEN)


// TODO: add:
// 3. Update /help
// 9. nekobot