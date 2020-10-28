const discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
  name: "hentai",
  aliases: [],
  category: "nsfw",
  description: "Get some wallpapers",
  run: async (client, message, args) => {
    
    if(!message.channel.nsfw) {
      return message.reply("THIS CHANNEL DOSEN'T SUPPORT NSFW CONENT")
      
    } else {
    
    let akanekoSan = new discord.MessageEmbed()
    akanekoSan.setColor("RANDOM")
    akanekoSan.setImage(akaneko.nsfw.hentai());
    return message.channel.send(akanekoSan);
      
    }
  }
}