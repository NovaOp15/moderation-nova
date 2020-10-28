const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "help",
  description: "INVITE TOXIC TEJU BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`<a:RBLink:761533945090932736> INVITE LINK OF BOT`)
    .setDescription(`[INVITE THE BOT](https://discord.com/api/oauth2/authorize?client_id=761486429322608650&permissions=8&scope=bot)`)
    .setColor("RANDOM")
    .setFooter(`BOT MADE BY TEJU`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}