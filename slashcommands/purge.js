const run = async (client, interaction) => {
	let amount = interaction.options.getNumber("amount")
	try {
		if (amount > 100) {
			var howMuch = Math.floor(amount / 100)
			var rest = amount - howMuch * 100
			if (!rest === 0 && rest <= 100) await interaction.channel.bulkDelete(rest)
			for (step = 0; step <= howMuch; step++) {
				await interaction.channel.bulkDelete(100)
			}
			return interaction.reply({ content: `${amount} messages have been deleted`, ephemeral: true })
		}
		await interaction.channel.bulkDelete(amount)
		interaction.reply({ content: `${amount} messages have been deleted`, ephemeral: true })
		return
	}
	catch (err) {
		if (err) {
			console.error(err)
			return interaction.reply({ content: `Failed to purge`, ephemeral: true })
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
