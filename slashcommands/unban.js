
const run = async (client, interaction) => {
    let member = interaction.options.getMember("user")
    let reason = interaction.options.getString("reason") || "No reason given"

    if (!member.user.id) return interaction.reply({ content: "Invalid member", ephemeral: true })

    try {
        await interaction.guild.bans.remove(member.user.id, {
            reason
        })
        await interaction.guild.fetchBans()
            .then(banned => {
                let list = banned.map(ban => ban.user.id).join(',');

                if (list.length >= 1950) list = `${list.slice(0, 1948)}...`;

                message.channel.send(`**${banned.size} users are banned:**\n${list}`);
            })
        const banList = await message.guild.fetchBans();

        const bannedUser = banList.find(member => member.user.id === 'someID');

        if (bannedUser) await message.channel.send(`${bannedUser.tag} is banned.`);
        else await message.channel.send('That user is not banned.');

        return interaction.reply(`${member.user.tag} has been unbanned for ${reason}`)
    }
    catch (err) {
        if (err) {
            console.error(err)
            return interaction.reply({ content: `Failed to unban ${member.user.id}}`, ephemeral: true })
        }
    }
}

module.exports = {
    name: "unban",
    description: "Unban a member",
    perm: "BAN_MEMBERS",
    options: [
        {
            name: "user", description: "The user to ban",
            type: "USER", required: true
        },
        {
            name: "reason",
            description: "Reason for unban",
            type: "STRING",
            required: false
        }
    ],
    run
}
