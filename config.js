const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94761516805'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://isuruthejan20068:s@cluster0.d5czksv.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94761516805"
global.devs = '94761516805';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0lsc2FzWS9OU0w0V2ZzV0p4dlFVbjIrMkZ0QnlIekdFWlREVngwVFgxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWVvci9zZXc0WS8zMXA5amtWUU5WTm9PRC91cTA3cTJNeUtjM29aaHZIVT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2T0twWUpkZnpIMXhxR2dXTlFOc0lRdXRFa1E2OVpMY2xxV1JCVWs3NzNVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJucFAxalh6dklmSys2eXBsNmd2OFEyTVQxbHAzazZ3UG9SSlhtQUpiNXlJPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktIblBzN1ZWbGVyVmIrY2haWlp1NGtlbmV0N0NscU1GOHpuYmtZVUErRnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVlNTB6QmpiWkNqYUZlNVVFMElJODlDMFlEaUJTbGJGS0Rnd1lZRW81RFE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyOFZIYjFGWFhHNzFybjFZOFVIR3ZodkZ2SWMwWEFzeCtUYkdCZGpYNjc5SFhqbk51SVBOMHNyTUFXTnFzRzVjdGM3VmI0WDc3VGNkVzh4UEdaK1NDdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjYxLCJhZHZTZWNyZXRLZXkiOiI5Y3RwcXNQMFlrOForR2pmY1BUaFB4bWllTVc0eEtXbXhZRmErTCtFYnJRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzSXlQd0J5clFjeTVIM0w5elJ0aE5nIiwicGhvbmVJZCI6ImVkZjZlMjA5LTg2MGYtNDhkZC1hZTI1LWExMWJiMGNhMmZlNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6VW15LzBkenNZNENXQ2hzNmRFOU9PempkK289In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJHTWNYQ0IxellPZEhFeW5pM1hHWlI4TVVSWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xyb2hQTUVFS2ZwcnF3R0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IndKNDRCTVo0d05GZ3hiMEFKS0JwOXdzTENjRGlhMGhzdmZqeVd4bFZrR2M9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ijl1ZzEraEZ2QTR4WlRKc0xUcEgzbVBEWlR0cmxPTzN6ZDQ5bm4xUzMyYm5RS1orS281UzhwbDFMUG04NlFLcWtrT3Q4eUZtd1FvY0RxOW90UEpsakFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1Rmw5d3psbzZKR2hDSFdmM2FsSHNrY0NiR0pmNnRLRUllYVRFT0Q3Nkk3QWNhd0VhSUh6YzM4bTJrYjZGY0Izb0wzYVNNMTJzYXNWckpUVExJUm9Ddz09In0sIm1lIjp7ImlkIjoiOTQ3NDA1NzE0MDc6NDNAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDA1NzE0MDc6NDNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY0NlT0FUR2VNRFJZTVc5QUNTZ2FmY0xDd25BNG10SWJMMzQ4bHNaVlpCbiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMzY1NDU2OX0=",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  '𝙼𝚁 Isuru',
  packname:  process.env.PACK_NAME || 'MADE BY 𝙼𝚁 Isuru',
  
  botname:   process.env.BOT_NAME === undefined ? "𝙼𝚁 Isuru" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '𝙼𝚁 Isuru' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'i am alive' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙼𝚁 Isuru•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| '𝙼𝚁 Isuru',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
