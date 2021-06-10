module.exports = {
  name: "botlist-ayar",

  description: "",

  execute(message, args, client) {
    const weky = require("weky");

    let randomNumber = weky.randomizeNumber(10, 20, 100, 1000);

    //console.log(randomNumber);
    const Discord = require("discord.js");
    const Data = require("plasma-db");
    const db = new Data("./botlist.json");
    let nicat = args[0];
    let prefix = db.get(`prefix_${message.guild.id}`) || "!!";
    const hataembed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("HATA: 400")
      .setDescription(
        `
      
      :x: Lütfen Belirli Argüman Belirtiniz! 
      
      Kullanım: ${prefix}botlist-ayar [\`yetkili\`,\`log\`,\`başvuru-kanal\`,\`sertifika-kanal\`,\`sertifika-log\`] 
  
    
      `
      )
      .setFooter(`${client.user.username} © ¦ BotList Sistemi V2`);
    if (!nicat) return message.reply(hataembed);
    if (nicat !== "yetkili" && nicat !== "log" && nicat !== "başvuru-kanal" && nicat !== "sertifika-kanal" && nicat !== "sertifika-log") 
      return message.reply("Arguman belirt");
    // message.reply('t!')
    if (nicat == "yetkili") {
      const rol = message.mentions.roles.first();
      const role = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("HATA: 400")
        .setDescription(
          `
 :x: Lütfen Bir Rol Belirtiniz!
 
   Kullanım: \`${prefix}botlist-ayar yetkili @rol\`
 
 `
        )
        .setFooter(`${client.user.username} © ¦ BotList Sistemi V2`);
      if (!rol) return message.reply(role);
      return message.channel.send("Rol Ayarlandı!");
      db.set(`botlistyetkilirol_${message.guild.id}`, rol.id);
    }
    if (nicat == "log") {
      const logkanal = message.mentions.channels.first();
      const loge = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("HATA:400").setDescription(`
   :x: Lütfen Bir Kanal Belirleyin! 
   
      Kullanım: \`${prefix}botlist-ayar log #kanal\`
   `);
      if (!logkanal) return message.reply(loge);
      db.set(`botlistlog_${message.guild.id}`, logkanal.id)
      return message.channel.send(`Log Kanal <#${logkanal.id}> Olarak Ayarlandı! `);
    }
    if(nicat == 'başvuru-kanal'){
      const ka = message.mentions.channels.first() 
      const be = new Discord.MessageEmbed() 
     .setColor('RED') 
     .setTitle('HATA: 400')
     .setDescription(`
     :x: Hata Bir Kanal Belirtmelisiniz! 
     
       Kullanım: \`${prefix}botlist-ayar başvuru-kanal\`
     `) 
     if(!ka) return message.reply(be) 
      db.set(`botlistekleme_${message.guild.id}`,ka.id)
      return message.channel.send('Ekleme Kanalı Ayarlandı!') 
     } 
    if(nicat == "sertifika-kanal"){
      const serkanal = message.mentions.channels.first() 
      if(!serkanal) return;
      db.set(`sertifika-kanal_${message.guild.id}`, serkanal.id)
      return message.channel.send(`
      
      ✔ ¦ Kanalı Ayarladım! 
         
          Kanal: <#${serkanal.id}>
      `) 
     } 
    if(nicat == "sertifika-log"){
      const sertilog = message.mentions.channels.first() 
      const sertiem = new Discord.MessageEmbed() 
     .setColor('RED') 
     .setTitle('HATA: 400')
     .setDescription(`
     :x: Lütfen Bir Kanal Etiketleyiniz! 
     `) 
      if(!sertilog) return message.channel.send(message.author,sertiem)
      db.set(`sertifikalog_${message.guild.id}`, sertilog.id)
      return message.channel.send(`
      ✔ ¦ Kanalı Ayarladım! 
          Kanal: <#${sertilog.id}>
      `) 
     } 
  },
};

//commands/test-command.js
