const {MessageEmbed}= require('discord.js');

module.exports = {
  run: async(client, message, args) => {
    const mes=new MessageEmbed().setDescription(`My prefix is ${process.env.PREFIX}. Try \`${process.env.PREFIX} help\` for more information`)
    return message.channel.send(mes)

  },
  name:'',
  aliases: [],
  description: 'Will do a randome thing'
}
