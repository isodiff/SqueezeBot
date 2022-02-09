const Discord = require("discord.js")

require("dotenv").config()

const client = new Discord.Client({
    intents: ["GUILDS"]
})

let bot = {
    client
}



const guildId = "773203659952750613"

client.slashcommands = new Discord.Collection()

client.loadSlashCommands = (bot, reload) => require("../handlers/slashcommands")(bot, reload)
client.loadSlashCommands(bot, false)

client.on("ready", async () => {
    const guild = client.guilds.cache.get(guildId) // null
    if (!guild) {
        await client.application.commands.set([...client.slashcommands.values()])
        console.log(`Successfully loaded in ${client.slashcommands.size} global commands`)
        process.exit(0)
    } else {
        await guild.commands.set([...client.slashcommands.values()])
        console.log(`Successfully loaded in ${client.slashcommands.size} slash-commands`)
        process.exit(0)
    }
})

client.login(process.env.TOKEN)