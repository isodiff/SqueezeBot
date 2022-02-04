const run = async (client, interaction) => {
    const prettyMilliseconds = require("pretty-ms")
    const packageJSON = require("../package.json");
    const discordJSVersion = packageJSON.dependencies["discord.js"];
    const os = require("os");

    function between(min, max) {
        return Math.floor(
            Math.random() * (max - min) + min
        )
    }


    const freeMemory = os.freemem() / 1000000000;
    const totalMemory = os.totalmem() / 1000000000;



    try {

        const infoEmbed = {
            color: "RANDOM",
            title: 'Bot Stats',
            author: {
                name: 'author: twfl',
                icon_url: 'https://de.catbox.moe/65u3r5.jpg',
                url: 'https://github.com/isodiff',
            },
            description: 'Blahaj Maid Discord bot. Cleanse the corrupt souls of this cursed land, and more!',
            fields: [
                {
                    name: "Uptime:",
                    value: `${prettyMilliseconds(client.uptime)}`,
                    inline: false
                }, {
                    name: 'Username:',
                    value: `${client.user.tag}`,
                    inline: true
                }, {
                    name: 'Commands:',
                    value: `9`,
                    inline: true
                }, {
                    name: 'Prefix:',
                    value: `\! or \/`,
                    inline: true
                }, {
                    name: 'discord.js:',
                    value: `${discordJSVersion}`,
                    inline: true
                }, {
                    name: 'Total memory (GB):',
                    value: `${totalMemory}`,
                    inline: true
                }, {
                    name: 'Free memory (GB):',
                    value: `${freeMemory}`,
                    inline: true
                }, {
                    name: 'Source Code:',
                    value: '[Click here](https://github.com/isodiff/SqueezeBot)',
                    inline: true
                }, {
                    name: 'Documentation:',
                    value: '[Click here](https://github.com/isodiff/SqueezeBot#squeezebot-also-known-as-blahaj-maid)',
                    inline: true
                },
                {
                    name: 'Random number (1 or 2):',
                    value: `${between(1, 3)}`,
                    inline: true
                }
            ],
            timestamp: new Date(),
        }

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
    name: "bot-info",
    description: "View information about a bot",
    perm: "",
    run
}

