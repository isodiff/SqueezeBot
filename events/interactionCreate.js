module.exports = {
    name: 'interactionCreate',
    run: (bot, interaction) => {
        if (interaction.isCommand()) handleSlashCommand(bot, interaction)
        else if (interaction.isButton()) handleButton(bot, interaction)
    },
};

const handleButton = (bot, interaction) => {
    const { client } = bot

    const [name, ...params] = interaction.customId.split('-')

    const button = client.buttons.get(name)

    if (!button) return
    button.run(client, interaction, params)
}
const handleSlashCommand = (bot, interaction) => {
    const { client } = bot

    if (!interaction.inGuild()) return interaction.reply({ content: "This command can only be used in a server", ephemeral: true })

    const slashcmd = client.slashcommands.get(interaction.commandName)

    if (!slashcmd) return

    if (slashcmd.perm && !interaction.member.permissions.has(slashcmd.perm))
        return interaction.reply({ content: `${interaction.member.user.tag} is not in the moderatoers file. This incident will be reported.`, ephemeral: true })

    slashcmd.run(bot, interaction)
}