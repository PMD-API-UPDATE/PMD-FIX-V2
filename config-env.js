
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Enter your session-id",
BOT_NUMBER: process.env.BOT_NUMBER || "Enter your botnumber (without + mark and spaces)",
PASSWORD: process.env.PASSWORD || "Enter you like password",
GITHUB_USERNAME: process.env.GITHUB_USERNAME || "Enter your github username",
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN || "Enter your GITHUB_AUTH_TOKEN"
};
