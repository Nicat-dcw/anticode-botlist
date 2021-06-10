const Discord = require('discord.js')
const os = require('os')
var speedTest = require('speedtest-net');

//exports.run = (client, message) => {
module.exports = {

    name: 'speed',

    description: 'Ping!',

    execute(message, args, client) {
  var osType = os.type();

     message.channel.send(`⏲ | İnternet Hızınız Yükleniyor, lütfen bekleyin.`).then(m => m.delete(3000));
     message.channel.send(`⏲ | Pinginiz Hesaplanıyor, lütfen bekleyin.`).then(m => m.delete(6000));
     message.channel.send(`⏲ | Host Aranıyor, lütfen bekleyin.`).then(m => m.delete(9000));
     message.channel.send(`⏲ | İşletim Sistemi Hesaplanıyor, lütfen bekleyin.`).then(m => m.delete(12000));
 
  if (osType === 'Darwin') osType = 'macOS'
  else if (osType === 'Windows') osType = 'Windows'
  else if (osType === 'Linux') osType = 'Linux'
  else if (osType === 'Ubuntu') osType = 'Ubuntu'
  else osType = os.type();
    var test = speedTest({maxTime: 5000});
    test.on('data', data => {
const embed = new Discord.MessageEmbed()
 .setColor('#000000')
.setTitle('**İnternet Bilgilerin**')
.addField(`:arrow_down: İndirme: **${data.speeds.download}**    :arrow_up: Yükleme: **${data.speeds.upload} **`)
.addField(` :round_pushpin: Ping: **${client.ws.ping}**`)
.addField(`:level_slider: İşletim Sistemi: **${osType}** \n \n:desktop: İnternet Sağlayıcısı: **${data.client.isp}** \n \n:file_cabinet: Host: **${data.server.host}**`)



message.channel.send(embed)
});
 
    test.on('error', err => {
  console.log(err);
});
}, 
 };

/*
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['speedtest', 'speed-test', 'ping'],
  permLevel: 0,
  kategori: "sahip"
};

exports.help = {
  name: 'hız-test',
  description: 'speedtest yapar',
  usage: 'speedtest'
}; */