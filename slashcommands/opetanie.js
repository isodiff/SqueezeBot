
const run = async (client, interaction) => {
    const { MessageEmbed } = require('discord.js');

    let member = interaction.options.getMember("user")
    let reason = interaction.options.getString("reason") || "za granie w lola"

    const opetanieEmbed = new MessageEmbed()
        .setColor('#eb4034')
        .setTitle(`${member.user.tag} został/a opętany/a przez demony`)
        .setDescription(`${reason}`)
        .setImage('https://files.catbox.moe/df4cnu.jpg')
        .setFooter({ text: 'Módlmy się, Amen' });

    if (!member) return interaction.reply("Invalid member")

    try {
        await interaction.guild.bans.create(member, {
            reason
        })
        return interaction.reply({ embeds: [opetanieEmbed] })
    }
    catch (err) {
        if (err) {
            console.error(err)
            return interaction.reply(`Failed to ban ${member.user.tag}`)
        }
    }
}

module.exports = {
    name: "opętanie",
    description: "Ban a member",
    perm: "BAN_MEMBERS",
    options: [
        {
            name: "user", description: "The user to ban",
            type: "USER", required: true
        },
        {
            name: "reason",
            description: "Reason for punishment",
            type: "STRING",
            required: false
        }
    ],
    run
}


//


// 