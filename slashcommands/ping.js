const run = async (client, interaction) => {
    try {
        const mesg = await interaction.reply({ content: "Ping!" })
        await new Promise(r => setTimeout(r, 3000));
        await interaction.editReply({ content: "Pong!" })
    }
    catch (err) {
        if (err) {
            console.error(err)
            return interaction.reply(`Failed to ping`)
        }
    }
}

module.exports = {
    name: "ping",
    description: "Ping the Squeeze bot",
    type: "CHAT_INPUT",
    run
}