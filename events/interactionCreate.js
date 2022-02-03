module.exports = {
    name: 'interactionCreate',
    run: (bot, interaction) => {
        const { client } = bot
        console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);

        if (!interaction.isCommand()) return
        if (!interaction.inGuild()) return interaction.reply("This command can only be used in a server")

        const slashcmd = client.slashcommands.get(interaction.commandName)

        if (!slashcmd) return interaction.reply("Invalid slash command")

        if (slashcmd.perm && !interaction.member.permissions.has(slashcmd.perm))
            return interaction.reply(`${interaction.member.user.tag} is not in the moderatoers file. This incident will be reported.`)

        slashcmd.run(client, interaction)
    },
};