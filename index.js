const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

const gamble = require('./utils/gamble.js');
const sys = require('./utils/system.js');
const actions = require('./utils/actions.js');
const waifu = require('./utils/waifu.js');

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

	if(command === 'tea') {
		actions.tea(message);
    }
    
    else if(command === 'latency'){
        sys.latency(message, client);
    }

	else if (command === 'coinflip') {
		gamble.coinFlip(message);
    }

    else if(command === 'rolldice'){
        gamble.rollDice(message);
    }

    else if(command === 'waifu'){
        waifu.getwaifu(message, Discord);
    }

    else if (command === 'server') {
        sys.server(message);
    }

    else if (command === 'user-info') {
        sys.userinfo(message);
    }

    else if (command === 'args-info') {
        sys.argsinfo(args, message, command);
    }

    else if (command === 'kick'){
        actions.kick(message);
    }

    else if(command === 'avatar'){
        sys.avatar(message);
    }

    else if(command === 'prune'){
        sys.prune(message, args);
    }
});

client.login(token);