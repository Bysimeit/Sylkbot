const Discord = require("discord.js");
const loadBotStatus = require('../loaders/loadBotStatus');
const loadRefreshBotStatus = require("../loaders/loadRefreshBotStatus");

module.exports = async bot => {
    await loadBotStatus(bot);
    await loadRefreshBotStatus(bot);

    console.log(`${bot.user.tag} is online !`);
};