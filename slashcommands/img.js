const { description } = require('./bot-info')

const interactions = [
    { name: "baka", value: "/baka" },
    { name: "tickle", value: "/tickle" },
    { name: "slap", value: "/slap" },
    { name: "poke", value: "/poke" },
    { name: "pat", value: "/pat" },
    { name: "kiss", value: "/kiss" },
    { name: "hug", value: "/hug" },
    { name: "feed", value: "/feed" },
    { name: "cuddle", value: "/cuddle" },
]
const images = [
    { name: "smug", value: "smug" },
    { name: "neko", value: "neko" },
    { name: "meow", value: "meow" },
    { name: "fox girl", value: "fox_girl" },
    { name: "kemonomimi", value: "kemonomimi" },
    { name: "holo", value: "holo" },
    { name: "gecg", value: "gecg" }
]


const run = async (client, interaction) => {

    const axios = require('axios');
    const { MessageEmbed } = require('discord.js');

    if (interaction.options.getSubcommand() === 'interactions') {
        let member = interaction.options.getMember("user")
        let what = interaction.options.getString("type")



        if (!member) return interaction.reply("This friend is not with us here")

        try {
            const response = await axios.get(`https://nekos.life/api/v2/img${what}`);
            const interactionData = response.data

            var title = `He he he`
            var desc = `**${interaction.member.user.username}** interacts with **${member.user.username}**`

            if (what === "/baka") {
                var title = `Dumbass!`
                var desc = `**${interaction.member.user.username}** hates **${member.user.username}**`
            }
            if (what === "/tickle") {
                var title = `Tickle, tickle, tickle`
                var desc = `**${interaction.member.user.username}** tickles **${member.user.username}!** \*Laughter\*`
            }
            if (what === "/slap") {
                var title = `Ouch!`
                var desc = `**${interaction.member.user.username}** slaps **${member.user.username}!** This must be painful!`
            }
            if (what === "/poke") {
                var title = `poke poke poke`
                var desc = `**${interaction.member.user.username}** pokes **${member.user.username}!** Hey, hey, hey, hey.`
            }
            if (what === "/pat") {
                var title = `Good, good.`
                var desc = `**${interaction.member.user.username}** pats **${member.user.username}!** I'm proud of you.`
            }
            if (what === "/kiss") {
                var title = `I love you!`
                var desc = `**${interaction.member.user.username}** kisses **${member.user.username}!** This is never going to happen irl.`
            }
            if (what === "/hug") {
                var title = `Hug!`
                var desc = `**${interaction.member.user.username}** gives a big, big hug to **${member.user.username}!**`
            }
            if (what === "/feed") {
                var title = `Here you go!`
                var desc = `**${interaction.member.user.username}** feeds **${member.user.username}!** They must be hungry!`
            }
            if (what === "/cuddle") {
                var title = `It's better than hugging!`
                var desc = `**${interaction.member.user.username}** cuddles **${member.user.username}!**`
            }

            const interactionEmbed = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle(`${title}`)
                .setDescription(`${desc}`)

                .setImage(interactionData['url'])

            const mesg = await interaction.reply({ embeds: [interactionEmbed] })
            return
        }
        catch (err) {
            if (err) {
                console.error(err)
                return interaction.reply(`Failed to interact with ${member.user.tag}`)
            }
        }
    }
    if (interaction.options.getSubcommand() === 'request') {

        let what = interaction.options.getString("category")

        try {
            const response = await axios.get(`https://nekos.life/api/v2/img/${what}`);
            const interactionData = response.data

            const interactionEmbed = new MessageEmbed()
                .setColor('#f542e6')
                .setTitle(`${what}\!`)
                .setDescription(`**${interaction.member.user.username}** requested ${what}`)

                .setImage(interactionData['url'])

            const mesg = await interaction.reply({ embeds: [interactionEmbed] })
            return
        }
        catch (err) {
            if (err) {
                console.error(err)
                return interaction.reply(`Failed to request`)
            }
        }
    }

}

module.exports = {
    name: "img",
    description: "Request a gif",
    options: [
        {
            name: "interactions",
            description: "Interact with a user",
            type: 1,
            options: [
                {
                    name: "type",
                    description: "Choose an interacion",
                    type: "STRING",
                    choices: interactions,
                    required: true
                },
                {
                    name: "user", description: "The friend",
                    type: "USER", required: true
                }
            ]
        },
        {
            name: "request",
            description: "Request an image",
            type: 1,
            options: [
                {
                    name: "category",
                    description: "Choose a category",
                    type: "STRING",
                    choices: images,
                    required: true
                }
            ]
        }
    ],
    run
}
