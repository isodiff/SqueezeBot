
const run = async (client, interaction) => {
    let member = interaction.options.getMember("user")

    if (!member) return interaction.reply("Invalid member")

    try {
        await interaction.reply(`Rozgrzeszam cię dobry człowieku. Amen`)
        return interaction.channel.send(`\@${member.user.tag} has been banned`)
    }
    catch (err) {
        if (err) {
            console.error(err)
            return interaction.reply(`Failed to help ${member.user.tag}`)
        }
    }
}

module.exports = {
    name: "rozgrzeszenie",
    description: "Help a member in tough times",
    perm: "",
    options: [
        {
            name: "user", description: "The user to help",
            type: "USER", required: true
        },
    ],
    run
}