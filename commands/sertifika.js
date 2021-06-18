const Discord = require('discord.js');
const Data = require('plasma-db');
const db = new Data('./botlist.json')

//exports.run = async(client, message, args) => {
module.exports = {

    name: 'sertifika',

    description: '!',

    execute(message, args, client) {
      const sertifikakanal = db.get(`sertifika-kanal_${message.guild.id}`) 
  if(message.channel.id !== sertifikakanal) return message.channel.send(`<#${sertifikakanal.id}> sadece bu kanalda kullanabılır.`)

let embedkontrol = db.get(`sertifikaembed_${message.guild.id}`) 

let botid = args[0]
let prefix = args[1]
if(!botid) return message.channel.send("Bir Bot İd Gir.")
message.delete()
  
message.channel.send("✔ ¦ **Sertifika İsteğiniz Gönderildi Lütfen Bekleyiniz! **")
  let logu = db.get(`sertifikalog_${message.guild.id}`) 
  client.channels.cache.get(logu).send(``)
  
  let embed = new Discord.MessageEmbed()
  .setColor(embedrenk)
.setDescription(`
Yeni Bir **Sertifika** Isteği! 
> Bilgiler:
\`\`\`
BOT : <@${botid}>
SAHIP : ${message.author}
\`\`\`
NOT : Onaylamak Için \`✔\` Iptal Etmek Için Hiç Bir Şey Yapmayınız! \n Işlem **30** Saniye Sonra **Iptal** Olunacaktır! 
`)
client.channels.cache.get(logu).send(embed).then(async function(sentEmbed) {

    const emojiArray = ["✔"];

    const filter = (reaction, user) =>

      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;

    await sentEmbed.react(emojiArray[0]).catch(function() {});

    var reactions = sentEmbed.createReactionCollector(filter, {

      time: 30000

    });

    reactions.on("end", () => sentEmbed.edit(`<@${botid}> Isimli Botun Isteği Reddetildi !`));

    reactions.on("collect", async function(reaction) {

      if (reaction.emoji.name === "✔") {

      /*  message.channel.send(`

          İşlem onaylandı!  adlı şahıs sunucudan atıldı!:verified:

        `);*/
        
 message.channel.send(`
 > <@${botid}> **Adlı Botun Sertifika Isteğini Onayladın! **
   Yetkili : ${message.author}
 `) 
        //message.guild.member(u).kick();

      }

    });

  });
  

}, 
 };
/*
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "sertifika"
}*/

