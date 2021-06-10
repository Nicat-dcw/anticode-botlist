const Discord = require("discord.js") 
const client = new Discord.Client() 
const fs = require('fs');
const ex = require("express");
const app = ex();
let ayarlar = require('./ayar.json') 
app.get("/", (request, response) => {
  //response.sendFile(__dirname + "/views/index.html");
  response.json("./api/gateway/v4/botlist/requestListener.js");
});
const prefix = ayarlar.prefix;
app.get("/api/gateway/v4/botlist/requestCheck:token", (request, response) => {
  //response.sendFile(__dirname + "/views/index.html");
  //response.json("./api/gateway/v4/botlist/requestListener.js");
  const tokenCh = request.query.token;
  if(tokenCh == ""){
    request.json("Error ! Not Found Token");
    
    }
  let db = "";
  const botDataIst = db.get(`botlistData_${tokenCh}`);
  request.json(botDataIst);
});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {

    const command = require(`./commands/${file}`);

    // set a new item in the Collection

    // with the key as the command name and the value as the exported module

    client.commands.set(command.name, command);

};

client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);

    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {

        client.commands.get(command).execute(message, args, client);

    } catch (error) {

        console.error(error);

        message.reply('there was an error trying to execute that command!');

    }

});

client.login(process.env.TOKEN) 
//if(!error) return console.error("HATA OLUŞTU!")
console.log(`Bot Bağlandı! `)