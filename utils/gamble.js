module.exports = {
    coinFlip: (message) => {
        const rand = ['HEADS!', 'TAILS!'];
        const value = rand[Math.floor(Math.random()*rand.length)];
        message.channel.send(value, {
			files: [
				'./assets/CoinFlip.png',
			],
		});
    },
    
    rollDice: (message) => {
        const roll = Math.floor(Math.random() * 6) + 1;
        message.channel.send(`Your roll was: ${roll}`);
    }
};