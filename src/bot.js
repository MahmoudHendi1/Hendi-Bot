require('dotenv').config();
const path = require('path');
require('./db/mongoose')
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'REACTION']});
const Server =require('./models/server')


const { registerEvents } = require('./utils/registry');
(async () => {
     
    client.commands = new Discord.Collection();
    const commandFiles = fs.readdirSync(path.join(__dirname, '/commands')).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        // set a new item in the Collection
        // with the key as the command name and the value as the exported module
        client.commands.set(command.name, command);
    }
    
    client.cachedMessageReactions =new Discord.Collection();
    await registerEvents(client, '../events');
    

    client.on("guildCreate", async (gData) => {
        const server=new Server({
            serverID:gData.id,
            memberCount:gData.memberCount,
            iconURL:gData.iconURL
        })
        try{
            await server.save()
        }catch(e){
            console.log(e)
        }
    });

    await client.login(process.env.DISCORDJS_BOT_TOKEN);
})();
