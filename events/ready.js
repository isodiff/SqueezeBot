module.exports = {
    name: "ready",
    run: async (bot) => {
        const zip = (a, b) => a.map((k, i) => [k, b[i]]);
        const guildsId = bot.client.guilds.cache.map(guild => guild.id);
        const guildsNames = bot.client.guilds.cache.map(guild => guild.name);
        const guilds = zip(guildsId, guildsNames)
        console.log(guilds);
        console.log(`Logged in as ${bot.client.user.tag} in ${guilds.length} guilds`)

        bot.client.user.setActivity("!help", { type: "WATCHING" })
    }
}