const PREFIX = process.env.PREFIX;
module.exports = (client, message) => {
    if(message.author.bot) return;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return ;
    if (message.mentions.has(client.user.id)) {
        message.channel.send("Hello there!, How can I help you?");
    };

    if(!message.content.startsWith(PREFIX)) return;
    if(message.content.length===PREFIX.length)return client.commands.get('').run(client, message, []);
    
    let cmdName = message.content.substring(message.content.indexOf(PREFIX)+PREFIX.length+1).split(new RegExp(/\s+/))[0];
    console.log(cmdName)


    let argsToParse = message.content.substring(message.content.indexOf(cmdName)+cmdName.length+1);
    if(client.commands.get(cmdName)){
        client.commands.get(cmdName).run(client, message, argsToParse);
    }else{
        message.channel.send('Command does not exist. Try `$Hendi help` to get some help')
        console.log("Command does not exist.");
    }
};
