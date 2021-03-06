module.exports = {
  name: "clear",
  aliases:["c", "purge"],
  category: "moderation",
  description: "delete many messages with a single command ",
  run: async (client, message, args) => {
    
            
    if (message.deletable) {
        message.delete();
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Sorry you dont have Permissions to run the commands").then(m => m.delete(50000));
    }

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return message.reply("This is not a number").then(m => m.delete(50000));
    }

    let deleteAmount;
    if (parseInt(args[0]) > 500) {
        deleteAmount = 500;
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount, true)
    .catch(err => message.reply(`Something went wrong... ${err}`));
    
  }
}