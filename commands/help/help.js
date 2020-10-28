const discord = require("discord.js");

module.exports = {
  name: "help",
  category: "help",
  description: "BOT IS READY ",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`THUNDER E HELP MENU`)
      .setDescription(
        `
<a:dwarf2:761916743798882304> **MODERATION COMMANDS**
\`addrole\`,\`removerole\`,\`clear[purge]\`,\`ban\`,\`kick\`,\`voicekick\`,\`mute\`,\`unmute\`,\`slowmode\`,\`warn\`,\`warnings\`,\`resetwarns\`


<a:dwarf2:761916743798882304> **FUN COMMANDS**
\`advice\`,\`suggest\`,\`ascii\`,\`cat\`,\`cry\`,\`dog\`,\`fact\`,\`hug\`,\`joke\`,\`kiss\`,\`kpop\`,\`math\`,\`meme\`,\`mw\`,\`neko\`,\`pat\`,\`punch\`,\`slap\`


<a:dwarf2:761916743798882304>**INFORMATION COMMANDS**
\`avatar\`,\`botinfo\`,\`serverinfo\`,\`hastebin\`,\`imdb\`,\`membercount\`,\`ping\`,\`pokemon\`,\`servericon\`,\`whois\`,\`userinfo\`


<a:dwarf2:761916743798882304> **MUSIC COMMANDS**
\`play\`,\`search\`,\`skip\`,\`stop\`,\`pause\`,\`resume\`,\`nowplaying\`,\`queue\`,\`volume\`


<a:dwarf2:761916743798882304> **NSFW COMMANDNS**
\`ass\`,\`bdsm\`,\`cum\`,\`doujin\`,\`femdom\`,\`hentai\`,\`maid\`,\`nmw\`,\`nsfw,orgy\`,\`panty\`


<a:dwarf2:761916743798882304>**WELCOME COMMANDS **
\`setwelcome\`,\`setmessage\`,\`setwelcomeimg\`,\`welcometest\`


<a:dwarf2:761916743798882304> **INFO COMMANDS**
\`serverinfo\`,\`userinfo\`,\`botinfo\`,\`ping\`,\`avatar\`,\`membercount\`,\`whois\`,\`servericon\`


<a:dwarf2:761916743798882304>  **SPECIAL COMMANDS** 
\`giveaway,math,announce,emoji,\``
      )

      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#35CB31")
      .setFooter(`TOXIC TEJU BOT `)
      .setTimestamp((message.timestamp = Date.now()));

    await message.channel.send(embed);

    message.delete(1);
  }
};
