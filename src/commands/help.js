const {MessageEmbed}= require('discord.js');
const prefix = process.env.PREFIX;

module.exports = {
  run: async(client, message, args) => {
    const { commands } = message.client;
    if (!args.length) {
        const mes=new MessageEmbed().setTitle('Command List: ')
        const data =commands.map(command => command);
        data.shift()
        data.forEach(element => {
          mes.addField(element.name,element.description)
        });

        return message.author.send(mes)
            .then(() => {
                if (message.channel.type === 'dm') return;
                message.reply('I\'ve sent you a DM with all my commands!');
            })
            .catch(error => {
                console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
            });

    }
    
    const name = args.toLowerCase();
    const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
    if (!command) {
        return message.reply('that\'s not a valid command!');
    }
    const data=[]
    data.push(`**Name:** ${command.name}`);
    if (command.description) data.push(`**Description:** ${command.description}`);
    if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);
    data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);
    message.channel.send(data, { split: true });


  },
  name:'help',
  aliases: [],
  description: 'Help'
}
