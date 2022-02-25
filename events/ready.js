const Discord = require("discord.js")
require("dotenv").config()


var cyan = "\x1b[36m%s\x1b[0m"
var yelo = "\x1b[33m%s\x1b[0m"
var magenta = "\x1b[35m%s\x1b[0m"

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
                console.log(magenta, `[  +  ] Added an entry for ${f}`)
            }

        }
        console.log(result)
        console.log(yelo, `Logged in as ${client.user.tag} in ${Object.keys(result).length} guilds`)
        client.user.setActivity("nuclear tests", { type: "WATCHING" })
    }
}

