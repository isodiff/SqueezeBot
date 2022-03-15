const run = async (bot, interaction) => {
    const { client } = bot
    const prettyMilliseconds = require("pretty-ms")
    const packageJSON = require("../package.json")
    const discordJSVersion = packageJSON.dependencies["discord.js"]
    const os = require("os")

    const slashes = client.slashcommands.size

    const zip = (a, b) => a.map((k, i) => [k, b[i]]);

    const guildsId = bot.client.guilds.cache.map(guild => guild.id);
    const guildsNames = bot.client.guilds.cache.map(guild => guild.name);

    const guilds = zip(guildsId, guildsNames)

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
            title: '**Bot Stats**',
            author: {
                name: 'author: twfl',
                icon_url: 'https://de.catbox.moe/65u3r5.jpg',
                url: 'https://github.com/isodiff',
            },
            description: '**Blahaj Maid Discord bot. Cleanse the corrupt souls of this cursed land, and more!**',
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
                    value: `${slashes}`,
                    inline: true
                }, {
                    name: 'Prefix:',
                    value: `**\!** or** \/**`,
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
                    value: '[Click here](https://isodiff.github.io/SqueezeBot/)',
                    inline: true
                },
                {
                    name: 'Random number (1 - 100):',
                    value: `${between(1, 101)}`,
                    inline: true
                }
            ],
            timestamp: new Date(),
        }

        await interaction.reply({ embeds: [infoEmbed], ephemeral: true })
        return
    }
    catch (err) {
        if (err) {
            console.error(err)
            return interaction.reply({ content: `Failed to get info about ${client.user.tag}`, ephemeral: true })
        }
    }
}


module.exports = {
    name: "bot-info",
    description: "View information about a bot",
    perm: "",
    run
}
