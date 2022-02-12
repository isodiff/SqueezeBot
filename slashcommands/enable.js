const run = async (bot, interaction) => {
    const { Wlcms, client } = bot

    if (interaction.options.getSubcommand() === 'welcome-message') {
        const tagName = interaction.options.getString('name') || interaction.channel.name
        const topText = interaction.options.getString('top-text') || "Welcome"
        const bottomText = interaction.options.getString('bottom-text') || "to the server"
        const imageLink = interaction.options.getString('image') || 'https://de.catbox.moe/bs75ks.png'

        try {
            const channel = interaction.guild.channels.cache.find(
                channel => channel.name === `${tagName}`
            );
            const userGuildId = interaction.guild.id
            const userGuild = client.guilds.cache.get(userGuildId).name

            var affectedRows = await Wlcms.update(
                { trueFalse: 1 },
                {
                    where: { name: userGuild }
                });
            await Wlcms.update(
                { top_text: topText },
                {
                    where: { name: userGuild }
                });
            await Wlcms.update(

                { bottom_text: bottomText },
                {
                    where: { name: userGuild }
                },
            );
            await Wlcms.update(
                { image_link: imageLink },
                {
                    where: { name: userGuild }
                },
            );
            await Wlcms.update(
                { description: channel.id },
                {
                    where: { name: userGuild }
                });


            if (affectedRows > 0) {
                return interaction.reply(`Channel ${channel} added to database as welcome.`);
            }

            return interaction.reply(`Could not find a tag with name ${tagName}.`);

        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError') {
                return interaction.reply('That channel already exists in database.');
            }
            console.error(error)
            return interaction.reply('Something went wrong with adding a channel to database.');
        }
    }
}

module.exports = {
    name: "enable",
    description: "Enable bot features",
    perm: "ADMINISTRATOR",
    options: [
        {
            name: "welcome-message",
            description: "enable the welcome message",
            type: 1,
            options: [
                {
                    name: "name", description: "name of the channel",
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
