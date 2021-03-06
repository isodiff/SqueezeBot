const helpEmbed = {
    color: "RANDOM",
    title: '**Help**',
    description: '**Blahaj Maid commands**',
    fields: [
        {
            name: 'Commands:',
            value: `21`,
            inline: true
        }, {
            name: 'Prefix:',
            value: `**\! **or** \/**`,
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
            name: "Hug:",
            value: "Hug a user!\r\nArguments: **@user**",
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
            value: "Kick a member.\r\nArguments: **@user, reason**",
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


module.exports = {
    name: "help",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({ client, message, args }) => {
        message.reply({ embeds: [helpEmbed], ephemeral: true })
    }
}