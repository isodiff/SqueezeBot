const run = async (bot, interaction) => {
    const { Wlcms, client } = bot
    const tagName = interaction.options.getString('name');

    try {
        const channel = interaction.guild.channels.cache.find(
            channel => channel.name === `${tagName}`
        );
        const userGuildId = interaction.guild.id

        const userGuild = client.guilds.cache.get(userGuildId).name
        const channelId = channel.id

        const affectedRows = await Wlcms.update(
            { trueFalse: 1 },
            { description: channel },
            { where: { name: userGuild } });

        if (affectedRows > 0) {
            return interaction.reply(`Tag ${tagName} was edited.`);
        }

        return interaction.reply(`Could not find a tag with name ${tagName}.`);

        return interaction.reply(`Channel ${channel} added to database.`);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return interaction.reply('That channel already exists in database.');
        }
        console.error(error)
        return interaction.reply('Something went wrong with adding a channel to database.');
    }
}

module.exports = {
    name: "addwelcome",
    description: "Add a welcome channel",
    devOnly: true,
    options: [
        {
            name: "name", description: "name of the channel",
            type: "STRING", required: true,
        },
    ],
    run
}