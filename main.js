const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!!';


client.on('ready', () =>{
    console.log('I have been resurrected');
    client.user.setActivity('IP:mc.Backrooms.me', { type:'PLAYING'}).catch(console.error);
  
})


client.on('message', message=>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'plug'){
        message.channel.send('the plug from the backrooms image is a type C US plug');
    } else if (command == 'info'){
        message.channel.send("This is The Backrooms Investigation server where we try to solve the mystery of the location of the mysterious backrooms photo. While many of these liminal space photos like the backrooms could be real, there is some questioning of weather these photos are actually real. Some of them  turn out to be 3D renders. Could the backrooms be a 3D render? We do not know. If not, then there is still something to find out; where the location actually is.");
    } 
});



client.login('token');
