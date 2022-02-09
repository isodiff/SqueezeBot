const run = async (bot, interaction) => {
    const { Wlcms, client } = bot

    const tagList = await Wlcms.findAll({ attributes: ['name'] });
    const tagString = tagList.map(t => t.name).join(', ') || 'No tags set.';

    return interaction.reply(`List of tags: ${tagString}`);
}

module.exports = {
    name: "welcomes",
    description: "List all tags",
    devOnly: true,
    run
}