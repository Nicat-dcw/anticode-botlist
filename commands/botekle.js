module.exports = {

    name: 'botekle',

    description: 'botekle!',

    execute(message, args, client) {

   // message.reply('Pong!'). 
      const Discord = require('discord.js') 
      const Data = require('plasma-db') 
      const disbut = require("discord-buttons") 
      const db = new Data('./botlist.json') 
      let prefix = "!!";
let embedrenk = db.get(`logembed_${message.guild.id}` || "RANDOM") 

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
     .setColor(embedrenk) 
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
     
    \` Bilgi: Botu Onaylamak Için ${prefix}bot onayla [id] veya Butonlara Tıklayınız! \`
     `) 
     const onayla = new disbut.MessageButton() 
.setStyle("green")
.setLabel("Botu Onayla") 
.setID("onaylaa")

const reddet = new disbut.MessageButton() 
.setStyle("red")
.setLabel("Botu Reddet") 
.setID("redee")

      client.channels.cache.get(eklemekanal).send('', {embed:lo, buttons: [onayla, reddet]})
  client.on("clickButton", (button) => {
if(button.id == "onaylaa"){
      if(button.clicker.member.roles.cache.get(yetkili)) {
      await button.think()
db.add(`sıra_${message.guild.id}`, -1) 
var sahipp = db.fetch(`basvuran_${message.guild.id}`) 
   await button.reply.send("Botu Onayladınız! ")
client.channel.cache.get(sahipp).send("**Botunuz Onaylandı! **")
}else{
await button.reply.send("Yetkiniz Yok!") 

} 
} 
if(button.id == "redee"){
      if(button.clicker.member.roles.cache.get(yetkili)) {
    var sahipp = db.fetch(`basvuran_${message.guild.id}`) 
  
  await button.think()
   await button.reply.send("Botu Reddetdiniz! ")
   client.channel.cache.get(sahipp).send("**Botunuz Onaylandı! **")

}else{
await button.reply.send("Yetkiniz Yok!") 

} 
} 
});
  },

};

//commands/test-command.js
