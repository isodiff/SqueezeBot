const run = async (client, interaction) => {
	let amount = interaction.options.getNumber("amount")
	if (amount < 100) return interaction.reply("The value should be less or equal to 100")
	try {
		await interaction.channel.bulkDelete(amount)
		interaction.reply((`${amount} messages have been deleted`))
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
	description: "Delete multiple messages, the amount should be less than 100",
	perm: "ADMINISTRATOR",
	options: [
		{
			name: "amount", description: "The amount of messages to delete",
			type: "NUMBER", required: true
		}
	],
	run
}
