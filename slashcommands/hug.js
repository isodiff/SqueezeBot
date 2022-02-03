const run = async (client, interaction) => {
    let member = interaction.options.getMember("user")
    const axios = require('axios');
    const { MessageEmbed } = require('discord.js');

    if (!member) return interaction.reply("This friend is not with us here")

    try {
        const response = await axios.get('https://nekos.life/api/v2/img/hug');
        const hugData = response.data

        const hugEmbed = new MessageEmbed()
            .setColor('#f542e6')
            .setTitle('Hug!')
            .setDescription(`**${interaction.member.user.username}** hugged **${member.user.username}**`)

            .setImage(hugData['url'])

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
