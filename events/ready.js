const Discord = require("discord.js");
const loadBotStatus = require('../loaders/loadBotStatus');

module.exports = async bot => {
    await loadBotStatus(bot);

    console.log(`${bot.user.tag} is online !`);
};