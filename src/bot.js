require('dotenv').config();
const path = require('path');

const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'REACTION']});


const { registerCommands, registerEvents } = require('./utils/registry');
(async () => {
    await client.login(process.env.DISCORDJS_BOT_TOKEN);

    client.commands = new Discord.Collection();
    const commandFiles = fs.readdirSync(path.join(__dirname, '/commands')).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        // set a new item in the Collection
        // with the key as the command name and the value as the exported module
        client.commands.set(command.name, command);
    }
    
    client.cachedMessageReactions = new Map();
    await registerEvents(client, '../events');
    //await registerCommands(client, '../commands');
    
})();
