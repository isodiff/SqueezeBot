const Canvas = require('canvas')
const Discord = require('discord.js')

const dimensions = {
    height: 675,
    width: 1200,
    margin: 20
}

const av = {
    size: 256,
    x: 480,
    y: 170
}






const generateImage = async (guild, member, bot) => {
    const { Wlcms } = bot
    let username = member.user.username
    let discrim = member.user.discriminator
    let avatarUrl = member.user.displayAvatarURL({ format: 'png', dynamic: false, size: av.size })
    var tag = await Wlcms.findOne({ where: { name: guild } });

    var background = "https://de.catbox.moe/bs75ks.png"

    if (tag) {
        tag.increment('usage_count');
        var topText = tag.get('top_text');
        var bottomText = tag.get('bottom_text');
        var background = tag.get('image_link');
    }

    const canvas = Canvas.createCanvas(dimensions.width, dimensions.height)
    const ctx = canvas.getContext('2d')

    // draw background
    const backimg = await Canvas.loadImage(background)
    ctx.drawImage(backimg, 0, 0)


    // draw black tinted box
    ctx.fillStyle = "rgba(0,0,0,0.8)"
    ctx.fillRect(dimensions.margin, dimensions.margin, dimensions.width - 2 * dimensions.margin, dimensions.height - 2 * dimensions.margin)

    // draw avatar
    const avimg = await Canvas.loadImage(avatarUrl)
    ctx.save()
    ctx.beginPath()
    ctx.arc(av.x + av.size / 2, av.y + av.size / 2, av.size / 2, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.clip()

    ctx.drawImage(avimg, av.x, av.y)
    ctx.restore()

    ctx.fillStyle = "white"
    ctx.textAlign = "center"

    ctx.font = "110px Dongle"
    ctx.fillText(topText, dimensions.width / 2, dimensions.margin + 90)

    ctx.font = "110px Dongle"
    ctx.fillText(username + " \#" + discrim, dimensions.width / 2, dimensions.height - dimensions.margin - 125)

    ctx.font = "80px Dongle"
    ctx.fillText(bottomText, dimensions.width / 2, dimensions.height - dimensions.margin - 50)

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png")
    return attachment
}

module.exports = generateImage