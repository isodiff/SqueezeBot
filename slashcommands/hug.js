const { MessageEmbed } = require('discord.js');
const client = require('nekos.life');


const run = async (client, interaction) => {
    let member = interaction.options.getMember("user")

    const hugEmbed = new MessageEmbed()
        .setColor('#f542e6')
        .setTitle('Hug!')
        .setDescription(`${interaction.member.user.username} hugged ${member.user.username}`)

        .setImage('https://de.catbox.moe/9ht703.gif')

    if (!member) return interaction.reply("This friend is not with us here")

    try {
        const mesg = await interaction.reply({ embeds: [hugEmbed] })
        return
    }
    catch (err) {
        if (err) {
            console.error(err)
            return interaction.reply(`Failed to hug ${member.user.tag}`)
        }
    }
}

module.exports = {
    name: "hug",
    description: "Hug a friend",
    options: [
        {
            name: "user", description: "The friend to be hugged",
            type: "USER", required: true
        }
    ],
    run
}

