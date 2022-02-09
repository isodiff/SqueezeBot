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
                { trueFalse: 0 },
                {
                    where: { name: userGuild }
                });
            affectedRows = await Wlcms.update(
                { description: null },
                {
                    where: { name: userGuild }
                });
            if (affectedRows > 0) {
                return interaction.reply(`Channel ${channel} removed from database`);
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
    name: "disable",
    description: "Disable bot features",
    perm: "ADMINISTRATOR",
    options: [
        {
            name: "welcome-message",
            description: "Disable the welcome message",
            type: 1,
        },

    ],
    run
}
