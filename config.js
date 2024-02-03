const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94719571407'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
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
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0YwTlRjWWp5WFU5QTlhR0NZbmtrcEdKbTNzSGlnYjkwclcwRlFkeVZrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibWxsYXF5Z0cvb1ZEbzU5Wm1nSmRyYXk2R0ZkUFNMTS9na01EOFlhajBScz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSzk1VC9NZU5BTFhYY05haS91V3MzeVFhUXMzYzVyQXhXSGJ4WGJTOTFZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTDRna0lld245b2luM3QzVTBwTmNaYjhza0UxT21Yc3ZFanJVMHFzT2hjPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1Kc3ZmTjdtT0dXbE5ZdFFaQ2FHeURHbXAxbzgzYnZOdFp5YzV1TFN6SDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJ6U0F2Y1g3VHgrRkNTR3F5aGlFMDJGVDZ6bGJia1dnLzU1ZGo5M0gzQ289In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpdXNUM2ExVUVlWFM5Wk4wVHlUbTUzVXVuQkpKbVFpV3FGaEFia0xpSnAyZVdUckJrNmw1WG5FanBYNnduRFdUblJHZnNCSHAxWU94T0VkOGVaVWJpQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjU1LCJhZHZTZWNyZXRLZXkiOiJSK3hWc3llNjRjVVJCcEJpRnhXNFlSd2RtOTdvOXZ1RVdjanpZOWFjTnhvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJwNldlVTgzOVJsdXJPeWZ5UTFYNU93IiwicGhvbmVJZCI6IjU4NTI0MWE4LTQ4MWUtNDU0OS1hOGZjLWU3ZjYyMDViZDdlZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4OG9RVGcrZ0VhRjgwZDFYQVpCbnREcVFaMnM9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFacFpiT0dvYk1pTlhhUFBtWUJYNVNWa2p1cz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xXeHdVMFF2cnY1clFZWUJ5QUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InZxSjBZVy90djd6K1h3d3MydUF6M0dhUXBud2UyaHlCUXAvaUx6N1Blbkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im1LRkp5UnVTa25LNVNqMi92OWdCTXFoVmpoUmVpbFFhUlRiKzVJZGZQSU5Od2Y4b1NtVVcxbHBORTFUdmFSYnhaNVMrVWwycjNXNjZGUnpKR1BHQkFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0RGdqZy80VmQyU0lTL0dyeUV1TkdoMk1CK2xyS1FFYzhjNFJyaDlsSHVZeWRIaUM5bFhRNGM3TFYyQkU0Y01pS0ZIUTNaemVaQ21Rb1FnQzNvVHFpZz09In0sIm1lIjp7ImlkIjoiOTQ3MTk1NzE0MDc6NDVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRGVsZXRlZCBBY2NvdW50In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzE5NTcxNDA3OjQ1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmI2aWRHRnY3Yis4L2w4TUxOcmdNOXhta0taOEh0b2NnVUtmNGk4K3ozcHkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDY5NzQ2NTcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTHRiIn0=,      //Put Your Session Id Here
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
 
