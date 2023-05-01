const Discord = require("discord.js");

module.exports = {
    name: "list",
    description: "Afficher la liste des joueurs connectés",
    permission: "Aucune",
    dm: false,
    category: "Utilisateurs",
    options: [],

    async run(bot, message, args) {
        let response = await fetch("https://api.mcsrvstat.us/2/sylkia.omgcraft.fr");
        let data = await response.json();

        if (data.online === true) {
            if (data.players.online <= 0) {
                let Embed = new Discord.EmbedBuilder()
                .setColor("#4E8852")
                .setTitle("Liste des joueurs connectés : ")
                .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
                .setDescription(`Il n'y a personne connecté sur le serveur.`)
                .setTimestamp()
                .setFooter({text: "Sylkbot"});

                await message.reply({embeds: [Embed]});
            } else {
                let output = "";
                for (let i = 0; i < data.players.list.length; i++) {
                    output += `${i + 1}. ${data.players.list[i]}\n`;
                }

                let Embed = new Discord.EmbedBuilder()
                .setColor("#4E8852")
                .setTitle("Liste des joueurs connectés : ")
                .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
                .setDescription(`${output}`)
                .setTimestamp()
                .setFooter({text: "Sylkbot"});

                await message.reply({embeds: [Embed]});
            }
        } else {
            let Embed = new Discord.EmbedBuilder()
            .setColor("#4E8852")
            .setTitle("Liste des joueurs connectés : ")
            .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
            .setDescription(`Le serveur minecraft est hors-ligne.`)
            .setTimestamp()
            .setFooter({text: "Sylkbot"});

            await message.reply({embeds: [Embed]});
        }
    }
};
