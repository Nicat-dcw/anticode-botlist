module.exports = {

    name: 'botekle',

    description: 'botekle!',

    execute(message, args, client) {

   // message.reply('Pong!'). 
      const Discord = require('discord.js') 
      const Data = require('plasma-db') 
      const db = new Data('./botlist.json') 
      let prefix = "!!";
      const eklemekanal = db.get(`botlistekleme_${message.guild.id}`)
const modlogkanal = message.guild.channels.cache.find(kanal => kanal.id === eklemekanal);
    //  if(!message.channel.id !== eklemekanal) return;
if(!modlogkanal) return message.channel.send('HATA : 500 \n Ekleme Kanalı Ayarlanmamış!') 
  let botid = args[0];
      let botprefix = args[1];
      let onaydurum = args[2];
      const embed = new Discord.MessageEmbed() 
   .setColor('RED') 
      .setDescription(`
     Kullanım: \`${prefix}botekle [BotID] [Prefix] [Dbl Onay Durumu] \`
     
      NOT : [] Kullanmayınız
     `) 
      if(!args[0]) return message.channel.send(embed) 
      if(!botid) return message.channel.send('Bot Id Belirtmedin!') 
      if(!botprefix) return message.channel.send('Botun Prefixini Belirtmedin!') 
      if(!onaydurum) return message.reply('Onay Durumunu Yaz!') 
      db.set(`botid_${message.guild.id}`,botid)
      db.set(`botprefix_${message.guild.id}`, botprefix)
      db.set(`botonaydurum_${message.guild.id}`, onaydurum)
      db.set(`basvuran_${message.guild.id}`, message.author.id)
      db.add(`sıra_${message.guild.id}`,+1) 
      
     const basvuran = db.get(`basvuran_${message.guild.id}`) 
     const sira = db.get(`sıra_${message.guild.id}`) 
      const idsi = db.get(`botid_${message.guild.id}`)
      const prefixi = db.get(`botprefix_${message.guild.id}`) 
      const onayi = db.get(`botonaydurum_${message.guild.id}`) 
      const lo = new Discord.MessageEmbed() 
     .setColor('RANDOM') 
     .setTitle('Başvuru') 
     .setDescription(`
     Sisteme Yeni Bir Başvuru Bilgisi Geldi! 
       Toplam Sırada ${sira} Bot Mevcut! 
       
>   Bot Bilgileri:
     \`\`\`
     ID: ${idsi} 
     PREFIX: ${prefixi} 
     ONAY DURUMU: ${onayi} 
     \`\`\`
     
>   Sahip Bilgileri :
     \`\`\`
     ID: ${basvuran} 
     \`\`\`
     
    \` Bilgi: Botu Onaylamak Için ${prefix}bot onayla [id] \`
     `) 
      client.channels.cache.get(eklemekanal).send(lo)
    },

};

//commands/test-command.js