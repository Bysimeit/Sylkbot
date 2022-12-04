const Discord = require("discord.js");
const loadBotStatus = require('../loaders/loadBotStatus');
const loadRefreshBotStatus = require("../loaders/loadRefreshBotStatus");
const loadSlashCommands = require("../loaders/loadSlashCommands");

module.exports = async bot => {
    await loadBotStatus(bot);
    await loadRefreshBotStatus(bot);

    await loadSlashCommands(bot);

    console.log(`${bot.user.tag} is online !`);
};