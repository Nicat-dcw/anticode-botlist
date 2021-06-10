module.exports = {

    name: 'bot',

    description: 'h!',

    execute(message, args, client) {
const Discord = require('discord.js')
const Data = require('plasma-db') 
const db = new Data('./botlist.json')
let logkanal = db.get(`botlistlog_${message.guild.id}`) 
    //message.reply('Pong!')
/*rg = rol gerekli salladım wqe*/
let yetkili = db.fetch(`botlistyetkilirol_${message.guild.id}`) 
//if(!yetkili) return;
  //if(yetkili) {    
  if(!message.member.roles.cache.has(yetkili)&& !message.member.hasPermission("ADMINISTATOR")) return message.channel.send('Bu Komutu BotList Yetkilisi Kullana Bilmekte! ')
let rg = args[0];
      const emm = new Discord.MessageEmbed() 
  .setColor('RED') 
     .setTitle('HATA: 400')
     .setDescription(`
     :x: Bir Argüman Belirtiniz! \`onayla\`,\`reddet\`
     `) 
      if(rg !== "onayla" && rg !== "reddet") return message.reply(emm) 
     if(rg == "onayla"){
       let botid = db.fetch(`botid_${message.guild.id}`) 
       
       let offff = db.fetch(`botlistlog_${message.guild.id}`) 
       if(args[1].length < 8) return message.reply('Idler 8 Rakamdan Oluşur! ') 
       if(!botid) return message.reply(`${args[1]} Idli Botu Veritabanımda Bulamadım! `) 
       if(!args[1]) return message.channel.send(`
      :head_bandage: Lütfen Bir Bot ID'si Girin! 
    
       
       `) 
       
      db.set(`bot_${args[1]}_${message.guild.id}`, 'onaylı') 
       const onaylandi = new Discord.MessageEmbed() 
      .setColor('GREEN') 
      .setTitle('Heyoo!') 
      .setDescription(`
      **Bir Bot Onaylandı! **
       Bot: \`${args[1]}\`
       Sahip ID: **${db.fetch(`basvuran_${message.guild.id}`) || "Sunucuda Bulunamadı"}**
      
      `) 
       client.channels.cache.get(offff).send(onaylandi)
       message.channel.send(`${db.fetch(`basvuran-${message.guild.id}`) || "null" }, `) 
      } 
    },

};

//commands/test-command.js