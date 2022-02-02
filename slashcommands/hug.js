
const run = async (client, interaction) => {
    let member = interaction.options.getMember("user")
    let friend = interaction.options.getMember("friend")

    if (!member) return interaction.reply("This friend is not with us here")

    try {
        const mesg = await interaction.reply({ content: `https://de.catbox.moe/9ht703.gif \n\n <@${member.user.tag}> hugs <@${friend.user.tag}>` })
        return
    }
    catch (err) {
        if (err) {
            console.error(err)
            return interaction.reply(`Failed to hug ${member.user.tag}`)
        }
    }
}

module.exports = {
    name: "hug",
    description: "Hug a friend",
    options: [
        {
            name: "user", description: "The user thet hugs",
            type: "USER", required: true
        },
        {
            name: "friend", description: "The friend to be hugged",
            type: "USER", required: true
        }
    ],
    run
}


// https://de.catbox.moe/9ht703.gif
// https://i.imgur.com/pNw01HA.gif
//
// https://images2.imgbox.com/97/b2/LFdJtodf_o.gif