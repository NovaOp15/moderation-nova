const discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
  name: "nsfwwallpapers",
  aliases: ["nmw", "nsfwmobilewallpapers", "nsfwmwall"],
  category: "nsfw",
  description: "Get some wallpapers",
  run: async (client, message, args) => {
    
    if(!message.channel.nsfw) {
      return message.reply("THIS CHANNEL DOSEN'T SUPPORT NSFW CONENT")
      
    } else {
    
    let akanekoSan = new discord.MessageEmbed()
    akanekoSan.setColor("RANDOM")
    akanekoSan.setImage(akaneko.nsfw.mobileWallpapers());
    return message.channel.send(akanekoSan);
      
    }
  }
}