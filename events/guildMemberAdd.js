module.exports = {
    name: "guildMemberAdd",
    run: async (bot, member) => {
        const { MessageAttachment, MessageEmbed } = require('discord.js');
        const generateImage = require("../util/generateImage")
        const { Wlcms, client } = bot

        const userGuildId = member.guild.id
        const userGuild = client.guilds.cache.get(userGuildId).name
        const wtag = await Wlcms.findOne({ where: { name: userGuild } });
        const welcomeChannelId = wtag.get('description')

        const rulesChannelId = "938140217490169909" || "938140217490169909"

        const image = await generateImage(userGuild, member, bot)
        const file = new MessageAttachment([image]);

        const welcomeEmbed = new MessageEmbed()
            .setColor('#17ffaa')
            .setTitle(`\@${member.user.username} Welcome to the server!`)
            .setDescription(`Please check out our <#${rulesChannelId}>`)
            .setImage('attachment://welcome.png')
            .setTimestamp()

        try {
            if (wtag.get('trueFalse') === 0) return

            if (wtag) {
                wtag.increment('usage_count');

                member.guild.channels.cache.get(welcomeChannelId).send({
                    embeds: [welcomeEmbed],
                    files: [image],
                })
            }

            return console.log(`Sent a welcome message to ${userGuild}`);
        }
        catch (err) {
            console.log(err)
        }
    }
}





