const channels = [
    { name: "welcome", value: '938138626108313651' },
    { name: "photos", value: "934521884127662080" },
    { name: "rules", value: "938140217490169909" },
]
const run = async (client, interaction) => {
    let amount = interaction.options.getNumber("amount")
    let channel = interaction.options.getString("channel")

    try {
        let channel = '938138626108313651'
        await channel.bulkDelete(amount)
            .then(messages => console.log(`${amount} of messages has been deleted from ${channels.find(d => channel === d.value)?.name}`))
            .catch(console.error);
        return
    }
    catch (err) {
        if (err) {
            console.error(err)
            return interaction.reply(`Failed to purge`)
        }
    }
}

module.exports = {
    name: "purge",
    description: "Delete multiple messages",
    perm: "ADMINISTRATOR",
    options: [
        {
            name: "amount", description: "The amount of messages to delete",
            type: "NUMBER", required: true
        },
        {
            name: "channel",
            description: "The channel  to delete from",
            type: "STRING",
            choices: channels,
            required: true

        }
    ],
    run
}
