const discord = require("discord.js");

module.exports = {
  name: "support",
  category: "help",
  description: "JOIN BOTS SUPPORT SERVER",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`:link: SUPPORT SERVER`)
    .setDescription(`[SUPPORT SERVER](SERVER LINK)`)
    .setColor("RANDOM")
    .setFooter(`BOT MADE BY TEJU`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}