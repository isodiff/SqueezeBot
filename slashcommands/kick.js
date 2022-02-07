
const run = async (client, interaction) => {
    let member = interaction.options.getMember("user")
    let reason = interaction.options.getString("reason") || "No reason given"

    if (!member) return interaction.reply({ content: "Invalid member", ephemeral: true })

    try {
        await member.send(`You have been kicked from ${interaction.guild.name}, reason: ${reason}`)
        await interaction.guild.members.kick(member, reason)
        return interaction.reply(`${member.user.tag} has been kicked out for ${reason}`)
    }
    catch (err) {
        if (err) {
            console.error(err)
            return interaction.reply({ content: `Failed to kick ${member.user.tag}`, ephemeral: true })
        }
    }
}

module.exports = {
    name: "kick",
    description: "Kick a member",
    perm: "KICK_MEMBERS",
    options: [
        {
            name: "user", description: "The user to kick",
            type: "USER", required: true
        },
        {
            name: "reason",
            description: "Reason for punishment",
            type: "STRING",
            required: false
        }
    ],
    run
}