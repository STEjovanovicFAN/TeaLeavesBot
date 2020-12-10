module.exports = {
    argsinfo: (args, message, command) => {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        else if(args[0] === 'foo'){
            return message.channel.send('bar');
        }
    
        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    },

    avatar: (message) => {
        if(!message.mentions.users.size){
            return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`)
        }

        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true})}>`;
        });

        message.channel.send(avatarList);
    },

    prune: (message, args) => {
        const amount = parseInt(args[0]) + 1;

        if(isNaN(amount)){
            return message.reply('That doesn\'t seem to be a valid number.');
        }
        else if (amount <= 1 || amount > 100) {
            return message.reply('you need to input a number between 1 and 99.');
        }
    },

    userinfo: (message) => {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    },

    server: (message) => {
        message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);

    },

    latency: (message, client) =>{
        message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }
};