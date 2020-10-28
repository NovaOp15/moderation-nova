const discord = require("discord.js");

module.exports = {
  name: "botinfo",
  category: "help",
  description: "INVITE TOXIC TEJU BOT",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`__**INFORMATION ABOUT BOT**__`)
      .addField(
        "<a:right:761540237267566642> BOT NAME",
        `NINJA X
#6808
`
      )
      .addField(
        "<a:right:761540237267566642> BOT DEVELOPER ",
        `
 <:botdeveloper:761548005408899104>  <@761464140706480128>

      `
      )
      .addField(
        "<a:right:761540237267566642> TOTAL SERVER",
        `${client.guilds.cache.size}`,
        true
      )
      .addField(
        "<a:right:761540237267566642> TOTAL CHANNEL",
        `${client.channels.cache.size}`
      )
      .addField(
        "<a:right:761540237267566642> TOTAL USER",
        `${client.users.cache.size}`,
        true
      )
      .addField(
"<a:right:761540237267566642> BOT LIBRARY", `discord.js`)

      .setColor("#0200ff")
      .setFooter(`information about bot`);

    message.channel.send(embed);
  }
};
