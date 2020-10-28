const discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "welcometest",
  aliases: ["wtest"],
  category: "moderation",
  description: "Test the welcome",
  run: async (client, message, args) => {
    let member = message.mentions.users.first() || message.author;

    let default_url = `https://media.discordapp.net/attachments/696417925418057789/716197399336583178/giphy.gif?width=360&height=270`; //default msg mtt change krna yeh hyper ke liye lagaye hai ek baar custom msg shi ho gaya toh isko bhi shi kr denge

    let default_msg = `** :: Hey {user} Welcome to 

 Now U Are member of this server. 
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Welcome to ${member.guild}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Be sure to read the RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
│Enjoy your stay here.
│Read the server rules at 
#rules   and follow them.
│If you have any problem you can direct message to server Senior Staff
│Hope you have a great time in Λ G Є И T
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

    let msg = db.get(`msg_${member.guild}`);
    if (msg === null) msg = default_msg;

    let url = db.get(`url_${member.guild}`);
    if (url === null) url = default_url;

    let embed = new discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true, size: 2048 }))
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
      .setColor("RANDOM")
      .setImage(url)
      .setDescription(msg);

    message.channel.send(embed);
  }
};
