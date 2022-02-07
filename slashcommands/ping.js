const run = async (client, interaction) => {
    try {
        const mesg = await interaction.reply({ content: "Ping!", ephemeral: true })
        await new Promise(r => setTimeout(r, 3000));
        await interaction.editReply({ content: "Pong! Bot is online!", ephemeral: false })
    }
    catch (err) {
        if (err) {
            console.error(err)
            return interaction.reply({ content: `Failed to ping`, ephemeral: true })
        }
    }
}

module.exports = {
    name: "ping",
    description: "Ping the Squeeze bot",
    type: "CHAT_INPUT",
    run
}