const cheerio = require('cheerio');
const fetch = require('node-fetch');
const url = 'https://mywaifulist.moe/dash';

const waifu = {
    name: '',
    imageUrl: '',
    bioUrl: '',
    extract: ''
  }
  
const getwaifu = async (message) => {
    return fetch(url)
        .then(res => res.text())
        .then(body =>  cheerio.load(body))
        .then($ => {
            const bio = $('#widget-waifu-of-the-day').find('.w-full').children().attr().href;
            const image = $('#widget-waifu-of-the-day').children().children().html().replace('<img class="w-full" src="','').replace('">','');
            const name = $('#widget-waifu-of-the-day').find('.no-underline').html();
            const extract = $('#widget-waifu-of-the-day').find('.text-grey-darker').html();

            waifu.imageUrl = image;
            waifu.bioUrl = `https://mywaifulist.moe${bio}`;
            waifu.name = name;
            waifu.extract = extract.trim();

            printwaifu(message);
        
        return waifu;
        });
}

const printwaifu = async (message) => {
    message.channel.send({
        embed: {
            title: `Waifu of the Day!\n\n${waifu.name}`,
            fields: [
              {
                name: 'Bio:',
                value: `${waifu.extract}\n\n${waifu.bioUrl}`
              }
            ],
            image: {
                url: 'attachment://waifupic.png'
            }
        },
        files: [{
            attachment: waifu.imageUrl,
            name: 'waifupic.png'
        }]
    });
}

module.exports = {
    getwaifu
};