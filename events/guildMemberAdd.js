module.exports = {
    name: "guildMemberAdd",
    run: async (bot, member) => {
        const { MessageAttachment, MessageEmbed } = require('discord.js');
        const generateImage = require("../util/generateImage")

        const image = await generateImage(member)
        const file = new MessageAttachment([image]);

        const welcomeChannelId = "938138626108313651"
        const rulesChannelId = "938140217490169909"

        const welcomeEmbed = new MessageEmbed()
            .setColor('#17ffaa')
            .setTitle(`@${member.user.username} Welcome to the server!`)
            .setDescription(`Please check out our <#${rulesChannelId}>`)
            .setImage('attachment://welcome.png')
            .setTimestamp()

        try {
            member.guild.channels.cache.get(welcomeChannelId).send({
                embeds: [welcomeEmbed],
                files: [image],
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}





