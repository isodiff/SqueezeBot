module.exports = {
    name: "guildMemberAdd",
    run: async (bot, member) => {
        const generateImage = require("../util/generateImage")

        const image = await generateImage(member)

        const welcomeChannelId = "938138626108313651"
        const rulesChannelId = "938140217490169909"

        try {
            member.guild.channels.cache.get(welcomeChannelId).send({
                content: `<@${member.id}> Welcome to the server! Please check out our <#${rulesChannelId}>`,
                files: [image]
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}
