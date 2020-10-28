const discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
  name: "maid",
  aliases: [],
  category: "nsfw",
  description: "Get some wallpapers",
  run: async (client, message, args) => {
    
    if(!message.channel.nsfw) {
      return message.reply("THIS CHANNEL DOSEN'T SUPPORT NSFW CONENT")
      
    } else {
    
    let akanekoSan = new discord.MessageEmbed()
    akanekoSan.setColor("RANDOM")
    akanekoSan.setImage(akaneko.nsfw.maid());
    return message.channel.send(akanekoSan);
      
    }
  }
}