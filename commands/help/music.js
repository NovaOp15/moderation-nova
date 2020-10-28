const discord = require("discord.js");

module.exports = {
  name: "music",
  category: "help",
  description: " ",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`BOT WILL SOON NEW FEATURES `)
      .setDescription(
        `
<a:tutus:762256363107123221>  **MUSIC COMMAND**  <a:tutus:762256363107123221>

<a:star1:762266068240564226> \`n!play\`      **play [title/url]**
<a:star1:762266068240564226>\`n!search\`     **search [title]**
<a:star1:762266068240564226>\`n!skip\`       **To Skip the Song**
<a:star1:762266068240564226>\`n!stop\`       **To Stop the Song**
<a:star1:762266068240564226>\`n!pause\`      **To Pause the Song**
<a:star1:762266068240564226>\`n!resume\`     **To Resume the Song**
<a:star1:762266068240564226>\`n!nowplaying\` **To see nowplaying Songs**
<a:star1:762266068240564226>\`n!queue\`      **Playing Songs List** 
<a:star1:762266068240564226>\`n!volume\`     **Set Volume 0 to 100**


`
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#02c1e6")
      .setFooter(`TOXIC TEJU  `)
      .setTimestamp((message.timestamp = Date.now()));

    await message.channel.send(embed);

  }
};
