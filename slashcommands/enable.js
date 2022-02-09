const run = async (bot, interaction) => {
    const { Wlcms, client } = bot
    if (interaction.options.getSubcommand() === 'welcome-message') {
        const tagName = interaction.options.getString('name');

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
            affectedRows = await Wlcms.update(
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
    devOnly: true,
    options: [
        {
            name: "welcome-message",
            description: "enable the welcome message",
            type: 1,
            options: [
                {
                    name: "name", description: "name of the channel",
                    type: "STRING", required: true,
                },
            ]
        },

    ],
    run
}
