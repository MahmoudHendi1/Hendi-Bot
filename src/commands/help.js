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
          mes.addField(element.aliases[0],element.description)  
        });
        mes.setColor(15844367)
        mes.setFooter("You can use help [command] to get more informatin about one command, like its flags")
        return message.channel.send(mes)

    }
    
    const name = args.toLowerCase();
    const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
    if (!command) {
        return message.reply('that\'s not a valid command!');
    }
  
  
    const data=[]
    data.push(`**Name:** ${command.aliases[0]}`);
    if (command.description) data.push(`**Description:** ${command.description}`);
    if (command.flags) data.push(`**Flags:** ${command.flags.join(' | ')}`);
    data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);
    message.channel.send(data, { split: true });


  },
  name:'help',
  aliases: ['help'],
  description: 'Help'
}
