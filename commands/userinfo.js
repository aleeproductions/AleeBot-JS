const Discord = require('discord.js');
exports.run = (client, message, args, config) => {
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("Here's your info.")
  .addField("Names", "**Username:** " + message.author.username + "\n**Display Name:** " + message.member.displayName)
  .addField("Identity", "**User ID:** " + message.author.id + "\n**Discriminator:** " + message.author.discriminator)
  .addField("Create and Join Times", "**Created account at:** " + message.member.user.createdAt + "\n**Joined server at:** " + message.member.joinedAt)
  .setColor("#7af442")
   message.channel.sendEmbed(embed);

}
