const PREFIX = process.env.PREFIX;
module.exports = (client, message) => {
    if(message.author.bot) return;

    if(!message.content.startsWith(PREFIX)) return;
    if(message.content.length===PREFIX.length)return client.commands.get('').run(client, message, []);
    
    let cmdName = message.content.substring(message.content.indexOf(PREFIX)+PREFIX.length+1).split(new RegExp(/\s+/))[0].toLowerCase();

    let argsToParse = message.content.substring(message.content.indexOf(cmdName)+cmdName.length+1);
    if(client.commands.get(cmdName)){
        client.commands.get(cmdName).run(client, message, argsToParse);
    }else{
        message.channel.send('Command does not exist. Try `$Hendi help` to get some help')
        console.log("Command does not exist.");
    }
};
