module.exports = {
  run: async(client, message, args) => {
    const members=await message.mentions.members.array();
    if(message.mentions.everyone){
      message.channel.send("Hendi can't choose form \`@everyone\` or \`@here\`.");
    }else if(!members.length){
      message.channel.send("You have to mention some member to choose from.");
    }else{
      message.channel.send(`:robot: Hendi chose ${members[Math.floor(Math.random() * (members.length))]}.`);
    }
  },
  name:'pick',
  aliases: ['pick'],
  description: 'It chooses someone randomly from mentioned members.'
}
