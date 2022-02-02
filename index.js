const Discord = require("discord.js")
require("dotenv").config()
// const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

let bot = {
    client,
    prefix: "n.",
    owners: ["687776146875744319"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()


client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot

// client.on("ready", () => {
//     console.log(`Logged in as ${client.user.tag}`)
// })

// client.on("messageCreate", (message) => {
//     if (message.content == "hi") {
//         message.reply("Hello World!")
//     }
// })

// const welcomeChannelId = "938138626108313651"
// const rulesChannelId = "938140217490169909"

// client.on("guildMemberAdd", async (member) => {
//     const image = await generateImage(member)
//     member.guild.channels.cache.get(welcomeChannelId).send({
//         content: `<@${member.id}> Welcome to the server! Please check out our <#${rulesChannelId}>`,
//         files: [image]
//     })
// })


client.login(process.env.TOKEN)