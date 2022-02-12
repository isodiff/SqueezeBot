const axios = require('axios');
const { MessageEmbed } = require('discord.js');

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

const run = async (client, interaction) => {
    let member = interaction.options.getMember("to-who")
    let what = interaction.options.getString("do-what")

    if (!member) return interaction.reply({ content: "This friend is not with us here", ephemeral: true })

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


module.exports = {
    name: "owo",
    description: "interact with users!",
    options: [{
        name: "do-what",
        description: "Choose an interacion",
        type: "STRING",
        choices: interactions,
        required: true
    },
    {
        name: "to-who", description: "The friend",
        type: "USER", required: true
    }
    ],
    run
}
