const PREFIX = process.env.PREFIX;
function getFirstWord(str) {
    let spaceIndex = str.indexOf(' ');
    return spaceIndex === -1 ? str : str.substr(0, spaceIndex);
};
module.exports = (client, message) => {
    if(message.author.bot) return;

    const str =getFirstWord(message.content);
    
    if(str!==PREFIX && str!==`<@!${client.user.id}>`) return;
    if(message.content.length===PREFIX.length){
        message.channel.send('Command does not exist. Try `$Hendi help` to get some help');
    }

    let cmdName = message.content.substring(message.content.indexOf(str)+str.length+1).split(new RegExp(/\s+/))[0].toLowerCase().trim();
    let argsToParse = message.content.substring(message.content.indexOf(cmdName)+cmdName.length+1);
    if(client.commands.get(cmdName)){
        client.commands.get(cmdName).run(client, message, argsToParse);
    }else{
        message.channel.send('Command does not exist. Try `$Hendi help` to get some help');
        console.log("Command does not exist.");
    }
};
