const run = async (client, interaction) => {
    try {

        const helpEmbed = {
            color: "RANDOM",
            title: '**Help**',
            description: '**Blahaj Maid commands**',
            fields: [
                {
                    name: 'Commands:',
                    value: `9`,
                    inline: true
                }, {
                    name: 'Prefix:',
                    value: `**\!** or **\/**`,
                    inline: true
                }, {
                    name: 'Documentation:',
                    value: '[Click here](https://github.com/isodiff/SqueezeBot#squeezebot-also-known-as-blahaj-maid)',
                    inline: true
                },
                {
                    name: "\/Fun",
                    value: "\r\n--------",
                    inline: false
                },
                {
                    name: "Img / request:",
                    value: "Request an sfw image!\r\nArguments: **category**",
                    inline: true
                },
                {
                    name: "Img / interaction:",
                    value: "Interact with friends!\r\nArguments: **type**, **@user**",
                    inline: true
                }, {
                    name: 'Rozgrzeszenie:',
                    value: `Sprowadź towarzysza na odpowiednią ścieżkę.\r\nArguments: **@user**`,
                    inline: true
                },
                {
                    name: "\/Info",
                    value: "\r\n--------",
                    inline: false
                },
                {
                    name: "bot-info:",
                    value: "Show more information about the bot.",
                    inline: true
                }, {
                    name: "ping:",
                    value: "Ping the bot, wait 3 seconds.",
                    inline: true
                },
                {
                    name: "\/Mod",
                    value: "\r\n--------",
                    inline: false
                },
                {
                    name: "opętanie:",
                    value: "Rozkaż demonom opętać grzeszną duszę.\r\nArguments: **@user, reason**",
                    inline: true
                },
                {
                    name: "kick:",
                    value: "Kick a member.\r\nArguments:** @user, reason**",
                    inline: true
                }, {
                    name: "ban:",
                    value: "Ban a member.\r\nArguments: **@user, reason**",
                    inline: true
                },
                {
                    name: "Timeout:",
                    value: "Mute a member.\r\nArguments: **@user, duration, reason**",
                    inline: true
                },
                {
                    name: "purge:",
                    value: "Delete multiple messeges. Max 100.\r\nArguments: **number**",
                    inline: true
                },

            ],
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

