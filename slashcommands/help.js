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

        const helpEmbed = {
            color: "RANDOM",
            title: 'Help',
            description: 'Blahaj Maid commands',
            fields: [
                {
                    name: "\/ fun",
                    value: "\u200B",
                    inline: false
                },
                {
                    name: "Hug:",
                    value: "Hug a user! \r\n Arguments: @user",
                    inline: true
                }, {
                    name: 'Username:',
                    value: `${client.user.tag}`,
                    inline: true
                }, {
                    name: 'Commands:',
                    value: `11`,
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

        await interaction.reply({ embeds: [helpEmbed] })
        return
    }
    catch (err) {
        if (err) {
            console.error(err)
            return interaction.reply(`Failed to get help from ${client.user.tag}`)
        }
    }
}


module.exports = {
    name: "help",
    description: "List of commands available for users",
    perm: "",
    run
}

