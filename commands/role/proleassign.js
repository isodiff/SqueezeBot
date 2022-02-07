const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")

module.exports = {
    name: "proleassign",
    category: "role",
    devOnly: true,
    run: async ({ client, message, args }) => {
        message.channel.send({
            embeds: [
                new MessageEmbed()
                    .setAuthor({ name: 'Weryfikacja', iconURL: 'https://de.catbox.moe/cbrxcn.png' })
                    .setTitle("Wybierz rolę")
                    .setDescription("Kliknij odpowiedni przycisk")
                    .setColor("#4ddb62")
            ],
            components: [
                new MessageActionRow().addComponents([
                    new MessageButton().setCustomId("role-939592508277673995").setStyle("PRIMARY").setLabel("Catgirl")
                ])
            ]
        })
    }
}