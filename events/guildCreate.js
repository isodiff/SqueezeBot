module.exports = {
    name: "guildCreate",
    run: async (bot, guild) => {
        try {
            const { Wlcms, client } = bot;

            await Wlcms.sync();

            const tagList = await Wlcms.findAll({ attributes: ['name'] });
            const tagArray = tagList.map(t => t.name)

            const cols = client.guilds.cache.map(guild => guild.name)
            const rows = client.guilds.cache.map(guild => guild.id);

            const tag = await Wlcms.create({
                name: guild.name,
                description: null,
                trueFalse: 0,
                username: null,
            });
            console.log("Added a new database entry");

            var result = rows.reduce(function (result, field, index) {
                result[cols[index]] = field;
                return result;
            }, {})

            console.log(guild.name, "Total: ", result)
        }
        catch (err) {
            console.log(err)
        }
    }
}