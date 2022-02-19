const run = async (bot, interaction) => {
    const { Wlcms, client } = bot

    if (interaction.options.getSubcommand() === 'welcome-message') {
        const tagName = interaction.options.getString('channel-name') || null
        const topText = interaction.options.getString('top-text') || null
        const bottomText = interaction.options.getString('bottom-text') || null
        const imageLink = interaction.options.getString('image') || null
        var channel = interaction.guild.channels.cache.find(
            channel => channel.name === `${tagName}`
        );
        var userGuildId = interaction.guild.id
        var userGuild = client.guilds.cache.get(userGuildId).name
        try {
            if (tagName !== null) {
                var affectedRows = await Wlcms.update(
                    { description: channel.id },
                    {
                        where: { name: userGuild }
                    });
            }
            if (topText !== null) {
                var affectedRows = await Wlcms.update(
                    { top_text: topText },
                    {
                        where: { name: userGuild }
                    });
            }
            if (bottomText !== null) {
                var affectedRows = await Wlcms.update(
                    { bottom_text: bottomText },
                    {
                        where: { name: userGuild }
                    },
                );
            }
            if (imageLink !== null) {
                var affectedRows = await Wlcms.update(
                    { image_link: imageLink },
                    {
                        where: { name: userGuild }
                    },
                );
            }
            if (affectedRows > 0) {
                return interaction.reply(`Channel ${channel} added to database as welcome.`);
            }

            return interaction.reply(`Could not find a tag with name ${tagName}.`);

        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError') {
                return interaction.reply('That channel already exists in database.');
            }
            console.error(error)
            console.log(userGuild, interacion.channel.name)
            return interaction.reply('Something went wrong with adding a channel to database.');
        }
    }
}

module.exports = {
    name: "edit",
    description: "Edit bot features",
    perm: "ADMINISTRATOR",
    options: [
        {
            name: "welcome-message",
            description: "edit the welcome message",
            type: 1,
            options: [
                {
                    name: "channel-name", description: "name of the channel",
                    type: "STRING", required: false,
                },
                {
                    name: "top-text", description: "top text on the image",
                    type: "STRING", required: false,
                },
                {
                    name: "bottom-text", description: "bottom text on the image",
                    type: "STRING", required: false,
                },
                {
                    name: "image", description: "link to an image hosted on the internet, 1200x675",
                    type: "STRING", required: false,
                }
            ],
        },
    ],
    run
}
