const Discord = require("discord.js");

module.exports = async (bot) => {
    let response = await fetch("https://api.mcsrvstat.us/2/sylkia.omgcraft.fr");
    let data = await response.json();

    if (data.online === true) {
        await bot.user.setActivity(`${data.players.online <= 1 ? `${data.players.online} connecté.` : `${data.players.online} connectés.`}`, {type: Discord.ActivityType["Watching"]});
    } else {
        await bot.user.setActivity(`un serveur éteint.`, {type: Discord.ActivityType["Watching"]});
    }
}
