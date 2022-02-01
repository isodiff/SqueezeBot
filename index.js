const Discord = require("discord.js")
require("dotenv").config()
const generateImage = require("./generateImage")
const prefix = "/"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi") {
        message.reply("Hello World!")
    }
})

const welcomeChannelId = "938138626108313651"
const rulesChannelId = "938140217490169909"

client.on("guildMemberAdd", async (member) => {
    const image = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server! Please check out our <#${rulesChannelId}>`,
        files: [image]
    })
})


client.login(process.env.TOKEN)