
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const username = fs.readFileSync('github_username.txt', 'utf8').trim()

module.exports = {
    SESSION_ID:  process.env.PRABATH-MD~nENgWKYQ#pLXTd4u_DoPdOx3tkKDUbH11PHp0zNnLPurmBqN2J_8,    
    BOT_NUMBER:  process.env.94784666782,
    GITHUB_USERNAME: username,Seneshlk
    GITHUB_AUTH_TOKEN: process.env.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,
};
