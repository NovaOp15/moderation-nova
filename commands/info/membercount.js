const discord = require("discord.js");

module.exports = {
  name: "membercount",
  category: "info",
  description: "Get your id",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setDescription(
    `
Total Members - ${message.guild.memberCount}
<:human:755487233506672760> Humans - ${message.guild.members.cache.filter(m => !m.user.bot).size}
<:bot:755747301032591370> Bots - ${message.guild.members.cache.filter(m => m.user.bot).size}`)
    .setColor("RANDOM")
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel.send(embed)
  }
}