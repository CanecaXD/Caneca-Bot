    const Discord = require('discord.js');
    const bot = new Discord.Client();

    const token = 'NjkyMDkwMTUxMTczODgxODk2.XnphBw.B9mZbVQ7OlIwtBJuf8GJesD5mA4';

    const prefix = '++';

    bot.on('ready', () => {
        console.log('CanecaBot está online!');
    })

    bot.on('message', msg=>{

        if(msg.author.bot){
            if (msg.embeds){
                const embedmsg = msg.embeds.find(msg => msg.title == 'Aviso');
                if (embedmsg){
                    msg.react('692455477698887751');
                }
            }
        }
        
        let args = msg.content.substring(prefix.length).split(" ");

        if (!msg.content.startsWith(prefix)) return;

        switch (args[0]){
            case 'clear':
                if (!args[1]) return msg.reply('Utilize: /clear <número>.');
                msg.channel.bulkDelete(args[1]);
                msg.reply('foram apagadas ' + args[1] + ' mensagens.');
                break;
            case 'aviso':
                if (!msg.member.roles.cache.find(r => r.name == "Caneca")) return msg.reply('Você não tem permissão para isso.');
                let mensagem = msg.content.substring(8);
                let canal = bot.channels.cache.get('692105711534080091');
                if (canal){
                    let embed = new Discord.MessageEmbed()
                    .setTitle('Aviso')
                    .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
                    .addField('Mensagem', mensagem)
                    .setTimestamp(new Date())
                    .setColor(0xFF9C33)
                    canal.send(embed);
                }
                break;
            case 'test':
                let embed = new Discord.MessageEmbed()
                .setTitle('Embed')
                .setDescription(args[1].replace('a', '\n'))
                .addField('Field', 'a\na')
                msg.channel.send(embed);
                break;
            case 'react':
                let embedr = new Discord.MessageEmbed()
                .setTitle('React')
                .setDescription('Testando reações')
                msg.channel.send(embedr);
                if (embedr){
                    embedr.react('692455477698887751')
                }
                break;
        }
    })

    bot.login(token);