module.exports = {
    name: "ready",
    run: async (bot) => {
        console.log("Logged in as " + bot.client.user.tag)
        bot.client.user.setActivity("you suffer", { type: "WATCHING" })
    }
}