const run = async (client, interaction) => {

    const { MessageEmbed } = require('discord.js')
    const prettyMilliseconds = require("pretty-ms")
    const packageJSON = require("../package.json");
    const discordJSVersion = packageJSON.dependencies["discord.js"];
    const os = require("os");

    const freeMemory = os.freemem() / 1000000000;
    const totalMemory = os.totalmem() / 1000000000;

    const infoEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Bot Stats')

        .setAuthor({ name: 'author: twfl', iconURL: 'https://de.catbox.moe/65u3r5.jpg', url: 'https://github.com/isodiff' })
        .setDescription('BlahajMaid Discord bot. Cleanse the corrupt souls of this cursed land')
        .addFields(
            { name: 'Uptime:', value: `${prettyMilliseconds(client.uptime)}`, inline: true },
            { name: 'Username:', value: `${client.user.tag}`, inline: true },
            { name: 'discord.js:', value: `${discordJSVersion}`, inline: true },
        )
        .addFields(
            { name: 'Commands:', value: `9`, inline: true },
            { name: 'Total memory (GB):', value: `${totalMemory}`, inline: true },
            { name: 'Free memory (GB):', value: `${freeMemory}`, inline: true }
        )
        .setTimestamp()

    try {
        await interaction.reply({ embeds: [infoEmbed] })
        return
    }
    catch (err) {
        if (err) {
            console.error(err)
            return interaction.reply(`Failed to get info about ${client.user.tag}`)
        }
    }
}


module.exports = {
    name: "xbot-info",
    description: "View information about a bot",
    perm: "",
    run
}

// .setURL('https://github.com/isodiff/SqueezeBot')