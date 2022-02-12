const axios = require('axios');
const { MessageEmbed } = require('discord.js');

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

module.exports = {
    name: "img",
    description: "Request a gif or image",
    options: [
        {
            name: "category",
            description: "choose a category",
            type: "STRING",
            choices: images,
            required: true,
        }
    ],
    run
}
