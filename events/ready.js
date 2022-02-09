module.exports = {
    name: "ready",
    run: async (bot) => {
        const { Wlcms, client } = bot;

        await Wlcms.sync();

        const tagList = await Wlcms.findAll({ attributes: ['name'] });
        const tagArray = tagList.map(t => t.name)

        const cols = client.guilds.cache.map(guild => guild.name)
        const rows = client.guilds.cache.map(guild => guild.id);
        var result = rows.reduce(function (result, field, index) {
            result[cols[index]] = field;
            return result;
        }, {})

        for (const f of cols) {
            if (!tagArray.includes(f)) {
                const tag = await Wlcms.create({
                    name: f,
                    description: null,
                    trueFalse: 0,
                    username: null,
                });
                console.log(`[  +  ] Added an entry for ${f}`)
            }

        }
        console.log(result)
        console.log(`Logged in as ${client.user.tag} in ${Object.keys(result).length} guilds`)
        client.user.setActivity("tests", { type: "WATCHING" })
    }
}