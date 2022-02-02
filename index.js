const Discord = require("discord.js")

require("dotenv").config()
const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

let bot = {
    client,
    prefix: "\!",
    owners: ["687776146875744319"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()
client.slashcommands = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)
client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)
client.loadSlashCommands(bot, false)

module.exports = bot

// client.on("messageCreate", (message) => {
//     if (message.content == "hi") {
//         message.reply("Hello World!")
//     }
// })

const welcomeChannelId = "938138626108313651"
const rulesChannelId = "938140217490169909"

client.on("guildMemberAdd", async (member) => {
    const image = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server! Please check out our <#${rulesChannelId}>`,
        files: [image]
    })
})

client.on("interactionCreate", (interaction) => {
    if (!interaction.isCommand()) return
    if (!interaction.inGuild()) return interaction.reply("This command can only be used in a server")

    const slashcmd = client.slashcommands.get(interaction.commandName)

    if (!slashcmd) return interaction.reply("Invalid slash command")

    if (slashcmd.perm && !interaction.member.permissions.has(slashcmd.perm))
        return interaction.reply(`${interaction.member.user.tag} is not in the moderatoers file. This incident will be reported.`)

    slashcmd.run(client, interaction)
})

// at the top of your file


// inside a command, event listener, etc.
// const exampleEmbed = new MessageEmbed()
//     .setColor('#0099ff')
//     .setTitle('Some title')
//     .setURL('https://discord.js.org/')
//     .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
//     .setDescription('Some description here')
//     .setThumbnail('https://i.imgur.com/AfFp7pu.png')
//     .addFields(
//         { name: 'Regular field title', value: 'Some value here' },
//         { name: '\u200B', value: '\u200B' },
//         { name: 'Inline field title', value: 'Some value here', inline: true },
//         { name: 'Inline field title', value: 'Some value here', inline: true },
//     )
//     .addField('Inline field title', 'Some value here', true)
//     .setImage('https://i.imgur.com/AfFp7pu.png')
//     .setTimestamp()
//     .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

// channel.send({ embeds: [exampleEmbed] });

client.login(process.env.TOKEN)