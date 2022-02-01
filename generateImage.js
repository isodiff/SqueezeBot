const Canvas = require('canvas')
const Discord = require('discord.js')

const dimensions = {
    height: 675,
    width: 1200,
    margin: 50
}

const av = {
    size: 256,
    x: 480,
    y: 170
}




const background = "https://files.catbox.moe/p0oyu7.jpg"

const generateImage = async (member) => {
    let username = member.user.username
    let discrim = member.user.discriminator
    let avatarUrl = member.user.displayAvatarURL({ format: 'png', dynamic: false, size: av.size })

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

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png")
    return attachment
}

module.exports = generateImage