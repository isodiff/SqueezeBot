const run = async (client, interaction) => {
    const prettyMilliseconds = require("pretty-ms");
    let avatarUrl = interaction.user.displayAvatarURL({ format: 'png', dynamic: false, size: 512 })
    try {
        await interaction.reply(`Uptime: ${prettyMilliseconds(client.uptime)}`)
        await interaction.channel.send(`Avatar: ${avatarUrl}`)
        return interaction.channel.send(`Bot name: ${client.user.tag}`)
    }
    catch (err) {
        if (err) {
            console.error(err)
            return interaction.reply(`Failed to get info about ${client.user.tag}`)
        }
    }
}


module.exports = {
    name: "xbot-info",
    description: "View information about a bot",
    perm: "ADMINISTRATOR",
    run
}